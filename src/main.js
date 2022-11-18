import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'remixicon/fonts/remixicon.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faMoon)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
