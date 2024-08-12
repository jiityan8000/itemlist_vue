import { createApp } from 'vue';
import '@/assets/style/bootstrap-reboot.css'

const app = createApp(window.App ?? {});

// コンポーネントを一括でグローバルに登録
const componentList = import.meta.glob("./components/**/*.vue", {
  eager: true,
});

Object.entries(componentList).forEach(([path, component]) => {
  const componentName = path.split('/').pop().replace('.vue', '');
  app.component(componentName, component.default);
});

app.mount('#app');