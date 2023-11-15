<template>
  <el-button class="d2-mr btn-text can-hover header-search" type="text" @click="handleClick">
    <d2-icon name="i-ri:search-line" class="font-size-18px"/>
    <span><span class="header-search__key" v-for="(item, index) in open" :key="index">{{item}}</span></span>
  </el-button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  computed: {
    ...mapState('d2admin/search', [
      'hotkey',
      'pool'
    ]),
    open() {
      return this.hotkey.open.split('+')
    }
  }
}
</script>
