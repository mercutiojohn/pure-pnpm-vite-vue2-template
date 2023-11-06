import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo/components',
  name: 'demo-components',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: [
    { path: 'container/full', name: 'demo-components-container-full', component: () => import('@/views/demo/components/container/full.vue'), meta: { ...meta, title: '布局组件 填充' } },
    { path: 'container/full-slot', name: 'demo-components-container-full-slot', component: () => import('@/views/demo/components/container/full-slot.vue'), meta: { ...meta, title: '布局组件 填充 插槽' } },
    { path: 'container/full-bs', name: 'demo-components-container-full-bs', component: () => import('@/views/demo/components/container/full-bs.vue'), meta: { ...meta, title: '布局组件 填充 滚动优化' } },
    { path: 'container/ghost', name: 'demo-components-container-ghost', component: () => import('@/views/demo/components/container/ghost.vue'), meta: { ...meta, title: '布局组件 隐形' } },
    { path: 'container/ghost-slot', name: 'demo-components-container-ghost-slot', component: () => import('@/views/demo/components/container/ghost-slot.vue'), meta: { ...meta, title: '布局组件 隐形 插槽' } },
    { path: 'container/ghost-bs', name: 'demo-components-container-ghost-bs', component: () => import('@/views/demo/components/container/ghost-bs.vue'), meta: { ...meta, title: '布局组件 隐形 滚动优化' } },
    { path: 'container/card', name: 'demo-components-container-card', component: () => import('@/views/demo/components/container/card.vue'), meta: { ...meta, title: '布局组件 卡片' } },
    { path: 'container/card-slot', name: 'demo-components-container-card-slot', component: () => import('@/views/demo/components/container/card-slot.vue'), meta: { ...meta, title: '布局组件 卡片 插槽' } },
    { path: 'container/card-bs', name: 'demo-components-container-card-bs', component: () => import('@/views/demo/components/container/card-bs.vue'), meta: { ...meta, title: '布局组件 卡片 滚动优化' } },
    { path: 'container/api', name: 'demo-components-container-api', component: () => import('@/views/demo/components/container/api.vue'), meta: { ...meta, title: '布局组件 API' } },
    { path: 'countup', name: 'demo-components-countup', component: () => import('@/views/demo/components/countup/index.vue'), meta: { ...meta, title: '数字动画' } },
    { path: 'editor-ueditor', name: 'demo-components-editor-ueditor', component: () => import('@/views/demo/components/editor-ueditor/index.vue'), meta: { ...meta, title: 'UEditor' } },
    { path: 'editor-quill', name: 'demo-components-editor-quill', component: () => import('@/views/demo/components/editor-quill/index.vue'), meta: { ...meta, title: '富文本编辑器' } },
    { path: 'highlight', name: 'demo-components-highlight', component: () => import('@/views/demo/components/highlight/index.vue'), meta: { ...meta, title: '代码高亮组件' } },
    { path: 'icon/icon', name: 'demo-components-icon-icon', component: () => import('@/views/demo/components/icon/icon.vue'), meta: { ...meta, title: '图标组件' } },
    { path: 'icon/icon-svg', name: 'demo-components-icon-icon-svg', component: () => import('@/views/demo/components/icon/icon-svg.vue'), meta: { ...meta, title: 'svg 图标' } },
    { path: 'icon/select', name: 'demo-components-icon-select', component: () => import('@/views/demo/components/icon/select.vue'), meta: { ...meta, title: '图标选择器' } },
    { path: 'icon/select-svg', name: 'demo-components-icon-select-svg', component: () => import('@/views/demo/components/icon/select-svg.vue'), meta: { ...meta, title: 'svg 图标选择器' } },
    { path: 'icon/list', name: 'demo-components-icon-list', component: () => import('@/views/demo/components/icon/list.vue'), meta: { ...meta, title: '图标列表' } },
    { path: 'index', name: 'demo-components-index', component: () => import('@/views/demo/components/index/index.vue'), meta: { ...meta, title: '组件首页' } },
    { path: 'json-tree', name: 'demo-components-json-tree', component: () => import('@/views/demo/components/json-tree/index.vue'), meta: { ...meta, title: 'JSON 展示' } },
    { path: 'layout/grid', name: 'demo-components-layout-grid', component: () => import('@/views/demo/components/layout/grid.vue'), meta: { ...meta, title: '拖拽网格布局' } },
    { path: 'layout/splitpane', name: 'demo-components-layout-splitpane', component: () => import('@/views/demo/components/layout/splitpane.vue'), meta: { ...meta, title: '区域布局' } },
    { path: 'markdown/source', name: 'demo-components-markdown-source', component: () => import('@/views/demo/components/markdown/source.vue'), meta: { ...meta, title: 'markdown指定资源渲染' } },
    { path: 'markdown/url', name: 'demo-components-markdown-url', component: () => import('@/views/demo/components/markdown/url.vue'), meta: { ...meta, title: 'markdown指定url渲染' } }
  ]
}
