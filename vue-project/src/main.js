import { createApp } from 'vue'
import App from './App.vue'
import router from './routing'
import './assets/main.css'

// ✅ Import AG Grid modules and styles
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// ✅ Register required AG Grid modules
import { ModuleRegistry } from 'ag-grid-community'
import { ClientSideRowModelModule } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

ModuleRegistry.registerModules([ClientSideRowModelModule])

// ✅ Create app and register AgGridVue globally
const app = createApp(App)

app.component('AgGridVue', AgGridVue) // <- Register AgGridVue globally
app.use(router)
app.mount('#app')
