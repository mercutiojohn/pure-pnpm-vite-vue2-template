import Vue from 'vue'

import d2Container from './d2-container/index.jsx'
import d2ContainerFrame from './d2-container-frame/index.vue'
import d2LinkBtn from './d2-link-btn/index.vue'

// 注意 有些组件使用异步加载会有影响
Vue.component('d2-container', d2Container)
Vue.component('d2-container-frame', d2ContainerFrame)
Vue.component('d2-link-btn', d2LinkBtn)
Vue.component('d2-count-up', () => import('./d2-count-up/index.vue'))
Vue.component('d2-highlight', () => import('./d2-highlight/index.vue'))
// Vue.component('d2-icon', () => import('./d2-icon/index.vue'))
Vue.component('d2-icon', () => import('./d2-icon-iconify/index.vue'))
Vue.component('d2-icon-svg', () => import('./d2-icon-svg/index.vue'))
Vue.component('d2-icon-select', () => import('./d2-icon-select/index.vue'))
Vue.component('d2-icon-svg-select', () => import('./d2-icon-svg-select/index.vue'))
Vue.component('d2-markdown', () => import('./d2-markdown/index.vue'))
Vue.component('d2-module-index-banner', () => import('./d2-module-index-banner/index.vue'))
Vue.component('d2-module-index-menu', () => import('./d2-module-index-menu/index.vue'))
Vue.component('d2-quill', () => import('./d2-quill/index.vue'))
Vue.component('d2-scrollbar', () => import('./d2-scrollbar/index.vue'))
Vue.component('d2-ueditor', () => import('./d2-ueditor/index.vue'))
