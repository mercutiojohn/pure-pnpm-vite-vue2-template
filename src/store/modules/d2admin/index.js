/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = import.meta.globEager('./modules/*.js');

const modules = {}

for (const path in files) {
  const moduleName = path.replace(/(\.\/modules\/|\.js)/g, '');
  modules[moduleName] = files[path].default;
}


export default {
  namespaced: true,
  modules
}
