<template>
  <!-- <Icon :icon="`${name}`" :style="{ fontSize: size && `${size}px`, lineHeight: size && `${size}px`, display: 'inline', height: size && `${size}px`, width: size && `${size}px` }"></Icon> -->
  <i :class="`${name}`" :style="{ fontSize: size && `${size}px`, lineHeight: size && `${size}px`, height: size && `${size}px`, width: size && `${size}px` }"></i>
  <!-- <i :class="`i-fluent:apps-16-regular`" :style="{ fontSize: size && `${size}px`, lineHeight: size && `${size}px`, display: 'inline', height: size && `${size}px`, width: size && `${size}px` }"></i> -->
</template>

<script>
// import { Icon } from '@iconify/vue2'
export default {
  name: 'd2-icon-iconify',
  components: {
    // Icon
  },
  props: {
    name: {
      type: String,
      required: false,
      default: 'document'
    },
    size: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
