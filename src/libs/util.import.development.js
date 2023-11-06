// module.exports = file => require('@/views/' + file).default

export default file => {
  return import(/* @vite-ignore */`@/views/${file}`).then(m => m.default);
}