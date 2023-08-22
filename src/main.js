import { createApp } from 'vue'
import { createPinia } from 'pinia'

import * as Popper from '@popperjs/core'
import * as Bootstrap from 'bootstrap'
// import 'bootstrap/scss/bootstrap.scss'

import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
