<template>
  <Icon :icon="`${collection}:${name}-${size || '16'}-${type}`" :style="{ fontSize: size && `${size}px`, lineHeight: size && `${size}px`, display: 'inline', height: size && `${size}px`, width: size && `${size}px` }"></Icon>
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
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'regular'
    }
  }
}
</script>
