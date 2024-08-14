/// <reference types="vite/client" />
import { Component, createApp, DefineComponent } from 'vue';
import { createPinia } from 'pinia'
import { useConfigStore } from '@/stores/configStore';
import '@/assets/style/bootstrap-reboot.css'

declare global {
  interface Window {
    App?: {
      data: () => any;
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