import { test, expect, type Page } from '@playwright/test'

// Widths that matter: small phones, large phones, tablets, the tailwind
// breakpoints themselves and the gaps just under and over them, where grid
// definitions change and layouts usually break.
const WIDTHS = [320, 360, 390, 414, 480, 640, 700, 768, 820, 930, 1000, 1024, 1280, 1440, 1920]

async function horizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement
    const overflowing: string[] = []

    // Which element is actually wider than the viewport, not just that
    // something is: without this the failure says nothing useful.
    for (const el of Array.from(document.querySelectorAll<HTMLElement>('body *'))) {
      const rect = el.getBoundingClientRect()
      if (rect.right > doc.clientWidth + 1 || rect.left < -1) {
        const id = `${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).split(' ').slice(0, 3).join('.') : ''}`
        overflowing.push(`${id} [${Math.round(rect.left)}..${Math.round(rect.right)}]`)
      }
    }

    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      culprits: overflowing.slice(0, 5),
    }
  })
}

for (const width of WIDTHS) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const { scrollWidth, clientWidth, culprits } = await horizontalOverflow(page)

    expect(
      scrollWidth,
      `page scrolls horizontally at ${width}px. offenders: ${culprits.join(' | ') || 'none identified'}`,
    ).toBeLessThanOrEqual(clientWidth)
  })
}

test('every section is reachable and visible at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 })
  await page.goto('/')

  for (const heading of [
    'I build the whole product',
    'Selected work.',
    'What I work with.',
    "Let's talk.",
  ]) {
    await expect(page.getByText(heading, { exact: false }).first()).toBeVisible()
  }
})

test('project rows keep their text inside the viewport at 930px', async ({ page }) => {
  await page.setViewportSize({ width: 930, height: 900 })
  await page.goto('/')

  const rows = page.locator('ul li a')
  await expect(rows).toHaveCount(3)

  const viewport = page.viewportSize()!.width
  for (let i = 0; i < 3; i++) {
    const box = await rows.nth(i).boundingBox()
    expect(box, `project row ${i} has no box`).not.toBeNull()
    expect(box!.x, `project row ${i} starts off-screen`).toBeGreaterThanOrEqual(-1)
    expect(
      box!.x + box!.width,
      `project row ${i} extends past the viewport`,
    ).toBeLessThanOrEqual(viewport + 1)
  }
})

test('the portrait stays a portrait and never swallows the viewport', async ({ page }) => {
  // Below lg the photo sits above the text in a single column. Without a cap
  // it stretched to the full viewport width and took over the whole screen.
  const cases = [
    { width: 360, maxRatio: 0.7 },
    { width: 768, maxRatio: 0.45 },
    { width: 930, maxRatio: 0.4 },
    { width: 1024, maxRatio: 0.45 },
    { width: 1440, maxRatio: 0.35 },
  ]

  for (const { width, maxRatio } of cases) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const box = (await page.locator('img[alt*="Clever Lopes"]').boundingBox())!

    expect(
      box.width / width,
      `portrait takes ${Math.round((box.width / width) * 100)}% of the ${width}px viewport`,
    ).toBeLessThanOrEqual(maxRatio)
  }
})

test('the hero fits one screen on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  // The name has to be above the fold: it is the whole point of the page.
  const name = page.getByRole('heading', { level: 1 })
  const box = (await name.boundingBox())!
  expect(box.y, 'the name is pushed below the fold').toBeLessThan(844)
})
