import { createApp } from 'vue'
import App from './App.vue'
import router from './routing'
import './assets/main.css'
import { createPinia } from 'pinia'

// ✅ AG Grid styles
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// ✅ AG Grid setup
import { ModuleRegistry } from 'ag-grid-community'
import { ClientSideRowModelModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

ModuleRegistry.registerModules([ClientSideRowModelModule])

// ✅ Create app and Pinia instance
const app = createApp(App)
const pinia = createPinia() // ← ✅ This creates the actual Pinia store

app.component('AgGridVue', AgGridVue)
app.use(router)
app.use(pinia) // ✅ This now registers the correct Pinia instance
app.mount('#app')
