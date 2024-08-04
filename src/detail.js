import { createApp } from 'vue'
import './assets/style/reboot.css'
import App from './pages/ItemDetailPage.vue'

import CategoryList from './components/CategoryList.vue'

const app = createApp(App)
.component("CategoryList", CategoryList)
.mount('#app')
