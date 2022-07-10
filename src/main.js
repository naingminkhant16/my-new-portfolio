import {
    createApp
} from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle"

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')