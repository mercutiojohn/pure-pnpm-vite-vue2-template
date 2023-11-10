<template>
  <div>
    <el-tooltip
      effect="dark"
      content="主题"
      placement="bottom">
      <el-button
        class="d2-ml-0 d2-mr btn-text can-hover"
        type="text"
        @click="dialogVisible = true">
        <d2-icon
          name="diamond"
          style="font-size: 16px"/>
      </el-button>
    </el-tooltip>
    <el-drawer
      title="主题"
      :visible.sync="dialogVisible"
      direction="rtl"
      :append-to-body="true">
      <d2-theme-list/>
    </el-drawer>
  </div>
</template>

<script>
import themeList from './components/d2-theme-list/index.vue'
export default {
  components: {
    'd2-theme-list': themeList
  },
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
