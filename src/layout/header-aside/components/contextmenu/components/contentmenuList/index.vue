<template>
  <div class="d2-contextmenu-list" @click="rowClick">
    <div v-for="item in menulist" :key="item.value" :data-value="item.value" class="d2-contextmenu-item" flex="cross:center main:center">
      <d2-icon-fa v-if="item.icon" :name="item.icon"/>
      <div class="d2-contextmenu-item-title" flex-box="1">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd2-contextmenu-list',
  props: {
    menulist: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    rowClick (event) {
      let target = event.target
      while (!target.dataset.value) {
        target = target.parentNode
      }
      this.$emit('rowClick', target.dataset.value)
    }
  }
}
</script>

<style lang="scss">
</style>
