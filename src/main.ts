/// <reference types="vite/client" />
import { createApp, DefineComponent } from 'vue';
import { createPinia } from 'pinia'
import { useConfigStore } from '@/stores/configStore';
import '@/assets/style/bootstrap-reboot.css'
import type { Config } from '@/types/common';

declare global {
  interface Window {
    App?: {
      data: () => Config;
    };
  }
}

const app = createApp({});

// コンポーネントを一括でグローバルに登録
const componentList = import.meta.glob("./components/**/*.vue", {
  eager: true,
});

Object.entries(componentList).forEach(([path, component]) => {
  const componentName = path.split('/').pop()?.replace('.vue', '');
  if(componentName){
    app.component(componentName, (component as DefineComponent).default);
  }
});

const pinia = createPinia()
app.use(pinia)

// 設定データをストアに保存
const configStore = useConfigStore();
if (window.App) {
  const configData = window.App.data();
  configStore.initializeConfig(configData);
}

app.mount('#app');