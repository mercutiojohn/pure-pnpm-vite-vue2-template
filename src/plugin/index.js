import Vue from 'vue'

// Element UI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 核心插件
import d2Admin from '@/plugin/d2admin/index'
Vue.use(d2Admin)

// Electron
import ipcRenderer from '@/plugin/ipcRenderer/index'
Vue.use(ipcRenderer)

// 字体 Fonts
import '@fontsource-variable/inter'
import '@fontsource-variable/fira-code'