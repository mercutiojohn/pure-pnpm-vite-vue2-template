import Vue from 'vue'

const iconMap = import.meta.globEager('./icons/*.svg')

// Vue.prototype.$IconSvg = Object.values(iconMap).map(e => e.default.id.slice(3))
Vue.prototype.$IconSvg = Object.values(iconMap).map(module => {
  // 确保module.default存在，并且它有一个id属性
  if (module.default && module.default.id) {
    return module.default.id.slice(3); // 根据你的SVG结构，你可能需要调整这里的逻辑
  }
  return null; // 或者你可以选择返回一个默认值或抛出一个错误
}).filter(Boolean); // 过滤掉所有null值