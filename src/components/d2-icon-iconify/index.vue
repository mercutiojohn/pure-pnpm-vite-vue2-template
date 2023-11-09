<template>
  <i :style="{ fontSize: `${size}px`, display: 'inline', lineHeight: `${size}px` }">
    <Icon :icon="`${collection}:${name}-${size}-${type}`" :style="{ fontSize: `${size}px`, lineHeight: `${size}px`, display: 'inline' }"></Icon>
  </i>
</template>

<script>
import { Icon } from '@iconify/vue2'
export default {
  name: 'd2-icon-iconify',
  components: {
    Icon
  },
  props: {
    collection: {
      type: String,
      required: false,
      default: 'fluent'
    },
    name: {
      type: String,
      required: false,
      default: 'document'
    },
    size: {
      type: String,
      required: false,
      default: '16'
    },
    type: {
      type: String,
      required: false,
      default: 'regular'
    }
  }
}
</script>
