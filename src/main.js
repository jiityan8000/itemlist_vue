import { createApp } from 'vue';
import '@/assets/style/bootstrap-reboot.css'
import ItemListPage from '@/components/pages/ItemListPage.vue';
import ItemDetailPage from '@/components/pages/ItemDetailPage.vue';

const app = createApp({});

// コンポーネントを一括でグローバルに登録
const componentList = import.meta.glob("./components/**/*.vue", {
  eager: true,
});

Object.entries(componentList).forEach(([path, component]) => {
  const componentName = path.split('/').pop().replace('.vue', '');
  app.component(componentName, component.default);
});

app.mount('#app');