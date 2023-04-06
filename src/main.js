import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as bootstrap from 'bootstrap'
import * as Popper from '@popperjs/core'

import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(Popper)

app.mount('#app')
