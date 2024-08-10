import { createApp } from 'vue';
import '@/assets/style/bootstrap-reboot.css'
import ItemListPage from '@/components/pages/ItemListPage.vue';
import ItemDetailPage from '@/components/pages/ItemDetailPage.vue';

const app = createApp({});

app.component("ItemListPage", ItemListPage);
app.component("ItemDetailPage", ItemDetailPage);

app.mount('#app');