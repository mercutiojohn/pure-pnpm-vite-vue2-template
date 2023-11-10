// @unocss-include
export default {
  path: '/demo/plugins',
  title: '插件',
  icon: 'i-fa:plug',
  children: [
    { path: '/demo/plugins/index', title: '插件', icon: 'i-fa:home' },
    {
      path: '/demo/plugins/import',
      title: '导入',
      icon: 'i-fa:download',
      children: [
        { path: '/demo/plugins/import/csv', title: 'csv' },
        { path: '/demo/plugins/import/xlsx', title: 'xlsx' }
      ]
    },
    {
      path: '/demo/plugins/export',
      title: '导出',
      icon: 'i-fa:upload',
      children: [
        { path: '/demo/plugins/export/table', title: '表格' },
        { path: '/demo/plugins/export/txt', title: '文本' }
      ]
    },
    { path: '/demo/plugins/clipboard-polyfill', title: '剪贴板访问', icon: 'i-fa:clipboard' },
    { path: '/demo/plugins/day', title: '日期计算', icon: 'i-fa:clock-o' },
    { path: '/demo/plugins/js-cookie', title: 'Cookie 读写', icon: 'i-fa:asterisk' }
  ]
}
