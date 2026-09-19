import '@/assets/style.css'

import { createSSRApp } from 'vue'
import App from './App.vue'

// The build prerenders the page into #app (see scripts/prerender.mjs), so the
// client hydrates that markup instead of throwing it away and rendering again.
createSSRApp(App).mount('#app')
