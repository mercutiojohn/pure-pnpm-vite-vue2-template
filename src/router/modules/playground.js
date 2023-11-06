import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo/playground',
  name: 'demo-playground',
  meta,
  redirect: { name: 'demo-playground-index' },
  component: layoutHeaderAside,
  children: [
    { path: 'index', name: 'demo-playground-index', component: () => import('@/views/demo/playground/index/index.vue'), meta: { ...meta, title: '功能首页' } },
    { path: 'store/page', name: 'demo-playground-store-page', component: () => import('@/views/demo/playground/store/page/index.vue'), meta: { ...meta, cache: true, title: '多标签页控制' } },
    { path: 'store/menu', name: 'demo-playground-store-menu', component: () => import('@/views/demo/playground/store/menu/index.vue'), meta: { ...meta, title: '菜单控制' } },
    { path: 'store/size', name: 'demo-playground-store-size', component: () => import('@/views/demo/playground/store/size/index.vue'), meta: { ...meta, title: '全局尺寸' } },
    { path: 'store/ua', name: 'demo-playground-store-ua', component: () => import('@/views/demo/playground/store/ua/index.vue'), meta: { ...meta, title: '浏览器信息' } },
    { path: 'store/gray', name: 'demo-playground-store-gray', component: () => import('@/views/demo/playground/store/gray/index.vue'), meta: { ...meta, title: '灰度模式' } },
    { path: 'store/fullscreen', name: 'demo-playground-store-fullscreen', component: () => import('@/views/demo/playground/store/fullscreen/index.vue'), meta: { ...meta, title: '全屏' } },
    { path: 'store/theme', name: 'demo-playground-store-theme', component: () => import('@/views/demo/playground/store/theme/index.vue'), meta: { ...meta, title: '主题' } },
    { path: 'store/transition', name: 'demo-playground-store-transition', component: () => import('@/views/demo/playground/store/transition/index.vue'), meta: { ...meta, title: '页面过渡开关' } },
    { path: 'page-cache/on', name: 'demo-playground-page-cache-on', component: () => import('@/views/demo/playground/page-cache/on.vue'), meta: { ...meta, cache: true, title: '开启缓存' } },
    { path: 'page-cache/off', name: 'demo-playground-page-cache-off', component: () => import('@/views/demo/playground/page-cache/off.vue'), meta: { ...meta, title: '关闭缓存' } },
    { path: 'page-cache/params/:id', name: 'demo-playground-page-cache-params', component: () => import('@/views/demo/playground/page-cache/params.vue'), meta: { ...meta, cache: true, title: '带参路由缓存' }, props: true },
    { path: 'page-argu/send', name: 'demo-playground-page-argu-send', component: () => import('@/views/demo/playground/page-argu/send.vue'), meta: { ...meta, title: '参数传递 发送' } },
    { path: 'page-argu/get/:username', name: 'demo-playground-page-argu-get', component: () => import('@/views/demo/playground/page-argu/get.vue'), meta: { ...meta, title: '参数传递 接收' } },
    { path: 'db/all', name: 'demo-playground-db-all', component: () => import('@/views/demo/playground/db/all/index.vue'), meta: { ...meta, title: '总览' } },
    { path: 'db/public', name: 'demo-playground-db-public', component: () => import('@/views/demo/playground/db/public/index.vue'), meta: { ...meta, title: '公共存储' } },
    { path: 'db/user', name: 'demo-playground-db-user', component: () => import('@/views/demo/playground/db/user/index.vue'), meta: { ...meta, title: '私有存储' } },
    { path: 'db/page-public', name: 'demo-playground-db-page-public', component: () => import('@/views/demo/playground/db/page-public/index.vue'), meta: { ...meta, title: '路由存储' } },
    { path: 'db/page-user', name: 'demo-playground-db-page-user', component: () => import('@/views/demo/playground/db/page-user/index.vue'), meta: { ...meta, title: '私有路由存储' } },
    { path: 'db/page-snapshot-public', name: 'demo-playground-db-page-snapshot-public', component: () => import('@/views/demo/playground/db/page-snapshot-public/index.vue'), meta: { ...meta, title: '路由快照' } },
    { path: 'db/page-snapshot-user', name: 'demo-playground-db-page-snapshot-user', component: () => import('@/views/demo/playground/db/page-snapshot-user/index'), meta: { ...meta, title: '私有路由快照' } },
    { path: 'log/ajax', name: 'demo-playground-log-ajax', component: () => import('@/views/demo/playground/log/ajax/index.vue'), meta: { ...meta, title: 'Ajax 错误' } },
    { path: 'log/console', name: 'demo-playground-log-console', component: () => import('@/views/demo/playground/log/console/index.vue'), meta: { ...meta, title: '控制台日志' } },
    { path: 'log/error', name: 'demo-playground-log-error', component: () => import('@/views/demo/playground/log/error/index.vue'), meta: { ...meta, title: '错误捕捉' } },
    { path: 'log/log', name: 'demo-playground-log-log', component: () => import('@/views/demo/playground/log/log/index.vue'), meta: { ...meta, title: '日志记录' } },
    { path: 'add-routes/routes', name: 'demo-playground-add-routes-routes', component: () => import('@/views/demo/playground/add-routes/routes.vue'), meta: { ...meta, title: '添加页面' } },
    { path: 'env', name: 'demo-playground-env', component: () => import('@/views/demo/playground/env/index.vue'), meta: { ...meta, title: '环境信息' } },
    { path: 'locales', name: 'demo-playground-locales', component: () => import('@/views/demo/playground/locales/index.vue'), meta: { ...meta, title: '国际化' } },
    { path: 'frame/html', name: 'demo-playground-frame-html', component: () => import('@/views/demo/playground/frame/html/index.vue'), meta: { ...meta, title: '静态 HTML' } },
    { path: 'frame/report', name: 'demo-playground-frame-report', component: () => import('@/views/demo/playground/frame/report/index.vue'), meta: { ...meta, title: 'Size report' } },
    { path: 'frame/d2-doc', name: 'demo-playground-frame-d2-doc', component: () => import('@/views/demo/playground/frame/d2-doc/index.vue'), meta: { ...meta, title: 'D2Admin 中文文档' } }
  ]
}
