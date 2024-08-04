import { createApp } from 'vue'
import './assets/style/reboot.css'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import ItemListPage from './pages/ItemListPage.vue';
import ItemDetailPage from './pages/ItemDetailPage.vue';
import CategoryList from './components/CategoryList.vue'

const routes = [
  { path: '/', component: ItemListPage },
  { path: '/detail', component: ItemDetailPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component("CategoryList", CategoryList);
app.mount('#app');