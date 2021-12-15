// Application hooks, called before the lifecycle begins.
import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

import router from '@/router'

import 'leaflet/dist/leaflet.css'

const app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')
