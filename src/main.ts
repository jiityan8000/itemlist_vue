/// <reference types="vite/client" />
import { Component, createApp, DefineComponent } from 'vue';
import '@/assets/style/bootstrap-reboot.css'

declare global {
  interface Window {
    App?: Component;
  }
}

const app = createApp(window.App ?? {});

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

app.mount('#app');