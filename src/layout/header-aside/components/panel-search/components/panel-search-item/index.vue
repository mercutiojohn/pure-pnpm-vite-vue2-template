<template>
  <transition name="fade-scale">
    <div class="d2-panel-search-item" v-show="show" :class="hoverMode ? 'can-hover' : ''" flex>
      <div class="d2-panel-search-item__icon pl-20px" flex-box="0">
        <div class="d2-panel-search-item__icon-box" flex="main:center cross:center">
          <d2-icon v-if="item.icon" :name="item.icon"/>
          <d2-icon-svg v-else-if="item.iconSvg" :name="item.iconSvg"/>
          <d2-icon v-else name="i-ri:file-line"/>
        </div>
      </div>
      <div class="d2-panel-search-item__info" flex-box="1" flex="dir:left">
        <div class="d2-panel-search-item__info-title" flex-box="1" flex="cross:center">
          <span>{{item.title}}</span>
        </div>
        <div class="d2-panel-search-item__info-fullTitle pr-20px" flex-box="0" flex="cross:center">
          <span>{{item.fullTitle}}</span>
        </div>
        <!-- <div class="d2-panel-search-item__info-path" flex-box="0">
          <span>{{item.path}}</span>
        </div> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    item: {
      default: () => ({})
    },
    hoverMode: {
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.show = true
    }, 1000)
  },
  beforeDestroy() {
    this.show = false
  }
}
</script>

<style lang="scss" scoped>
.d2-panel-search-item {
  height: 30px;
  margin: 0px -20px;
  &.can-hover {
    @extend %unable-select;
    margin: 0px;
    &:hover {
      background-color: #F5F7FA;
      .d2-panel-search-item__icon {
        .d2-panel-search-item__icon-box {
          i {
            /* font-size: 24px; */
            color: $color-primary;
          }
        }
      }
      .d2-panel-search-item__info {
        .d2-panel-search-item__info-title {
          color: $color-text-main;
        }
        .d2-panel-search-item__info-fullTitle {
          color: $color-text-normal;
        }
        .d2-panel-search-item__info-path {
          color: $color-text-normal;
        }
      }
    }
  }
  .d2-panel-search-item__icon {
    padding-left: 10px;
    width: 30px;
    .d2-panel-search-item__icon-box {
      height: 30px;
      width: 30px;
      /* border-right: 1px solid $color-border-3; */
      i {
        font-size: 20px;
        color: $color-text-sub;
      }
      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
  .d2-panel-search-item__info {
    margin-left: 10px;
    .d2-panel-search-item__info-title {
      font-size: 14px;
      line-height: 14px;
      /* font-weight: bold; */
      color: $color-text-normal;
    }
    .d2-panel-search-item__info-fullTitle {
      font-size: 10px;
      line-height: 14px;
      color: $color-text-placeholder;
    }
    .d2-panel-search-item__info-path {
      margin-bottom: 4px;
      font-size: 10px;
      line-height: 14px;
      color: $color-text-placeholder;
    }
  }
}
</style>
