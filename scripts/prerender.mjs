// Renders the app once at build time and writes the markup into dist/index.html.
//
// Why: the site is a Vue SPA, so without this the shipped HTML is an empty
// <div id="app"> and any crawler that does not execute JavaScript sees nothing.
// Google runs JS; LinkedIn, Slack and most scrapers do not.
//
// The client still hydrates on top of this markup, so behaviour is unchanged
// for real visitors.

import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'dist/index.html')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')

if (!existsSync(htmlPath)) {
  throw new Error('dist/index.html not found: run the client build first')
}
if (!existsSync(serverEntry)) {
  throw new Error('dist-ssr/entry-server.js not found: run the ssr build first')
}

const { render } = await import(serverEntry)
const markup = await render()

if (!markup || markup.length < 500) {
  throw new Error(`prerender produced suspiciously little markup (${markup?.length ?? 0} chars)`)
}

const html = readFileSync(htmlPath, 'utf-8')
const marker = '<div id="app"></div>'

if (!html.includes(marker)) {
  throw new Error(`could not find ${marker} in dist/index.html`)
}

writeFileSync(htmlPath, html.replace(marker, `<div id="app">${markup}</div>`), 'utf-8')

// The server bundle is a build artefact, not something to publish.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`prerendered ${markup.length} chars into dist/index.html`)
