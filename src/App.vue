<template>
  <div id="app">
    <div :class="`window-control-float ${currPlatform}`" v-if="isElectron">
      <d2-header-window-controls v-if="isElectron" style="height: 100%"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import util from '@/libs/util'
import d2HeaderWindowControls from '@/layout/header-aside/components/header-window-controls/index.vue'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  components: {
    d2HeaderWindowControls
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  computed: {
    ...mapState('d2admin/ua', {
      uaData: 'data'
    }),
    isElectron () {
      return window.require && window.require('electron') ? true : false
    },
    currPlatform() {
      if (this.uaData && this.uaData.os) {
        switch(this.uaData.os.name) {
          case 'Windows':
            return 'windows'
          case 'Linux':
            return 'linux'
          case 'Mac OS X':
            return 'mac'
          case 'Mac OS':
            return 'mac'
          default:
            return 'windows'
        }
      } else {
        return 'windows'
      }
    }
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/public-class.scss';
</style>
