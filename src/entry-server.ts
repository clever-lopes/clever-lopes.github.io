import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'

// Rendered once at build time. The page has no routing and no data fetching,
// so a single render of the default locale is the whole site.
export async function render(): Promise<string> {
  return renderToString(createSSRApp(App))
}
