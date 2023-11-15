<template>
  <div class="menu-function windows">
    <div :class="{'right-menu-frame':true,'light':lightMode}">
      <div class="frame-button minimize" @click="setFrame('min')"><i v-if="showMinimize" class=" i-fluent:minimize-24-regular"></i></div>
      <div class="frame-button maximize" @click="setFrame('plus')"><i v-if="showMaximize" :class="'' + (isMax?' i-fluent:restore-24-regular':' i-fluent:maximize-24-regular')"></i></div>
      <div class="frame-button close" @click="setFrame('close')"><i class="i-fluent:dismiss-24-regular"></i></div>
    </div>
  </div>
</template>

<script>
import { ipcApiCommonRoute } from '@/api/_local/ipcApiCommonRoute.js'
// import { ipcRenderer } from 'electron'
// import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      isMax: false,
      iconType: 'el-icon-full-screen'
    }
  },
  props: {
    lightMode: {
      type: Boolean,
      required: false,
      default: false
    },
    showMaximize: {
      type: Boolean,
      required: false,
      default: true
    },
    showMinimize: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    // ...mapState('d2admin/user', ['info']),
  },
  methods: {
    // ...mapActions('d2admin/account', ['logout']),
    setFrame (action) {
      switch (action) {
        case 'min':
          this.$ipc.send(ipcApiCommonRoute.windowMin)
          break
        case 'plus':
          this.$ipc.send(ipcApiCommonRoute.windowMax)
          //   this.isWindowMax()
          break
        case 'close':
          this.$ipc.send(ipcApiCommonRoute.windowClose)
          break
        default:
          break
      }
    },

    // isWindowMax() {
    //   const self = this
    //   this.$ipcInvoke(ipcApiCommonRoute.isWindowMax).then((result) => {
    //     self.isMax = result
    //   })
    //   this.iconType = self.isMax ? 'el-icon-full-screen' : 'el-icon-copy-document'
    // },

    /**
     * @description 登出
     */
    logOff () {
      this.logout({ vm: this, confirm: true })
    }
  },
  created () {
    this.$ipc.removeAllListeners(ipcApiCommonRoute.isWindowMax)
    this.$ipc.on('main-window-max', (event) => {
      this.isMax = true
    })
    this.$ipc.on('main-window-unmax', (event) => {
      this.isMax = false
    })
  }
}
</script>

<style lang="scss" scoped>

.frame-button:hover {
  background: #5757575b;
}
.frame-button:active {
  transition: background 0s ease;
  background: #4141419a;
}

::v-deep.el-dropdown-menu {
  padding: 0 2px;
  top: 22px !important;
}

::v-deep.el-dropdown-menu__item {
  padding: 0;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
}

::v-deep.el-popper .popper__arrow {
  display: none;
}
</style>
