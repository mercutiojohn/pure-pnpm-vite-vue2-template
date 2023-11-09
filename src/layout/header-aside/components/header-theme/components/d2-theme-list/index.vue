<template>
  <!-- <el-table :data="list" v-bind="table">
    <el-table-column prop="title" align="center" width="160"/>
    <el-table-column label="预览" width="120">
      <div slot-scope="scope" class="theme-preview" :style="{ backgroundImage: `url(${$baseUrl}${scope.row.preview})` }"/>
    </el-table-column>
    <el-table-column prop="address" align="center">
      <template slot-scope="scope">
        <el-button v-if="activeName === scope.row.name" type="success" icon="el-icon-check" round>已激活</el-button>
        <el-button v-else round @click="handleSelectTheme(scope.row.name)">使用</el-button>
      </template>
    </el-table-column>
  </el-table> -->
  <div class="theme-list">
    <div v-for="(item, index) in list" :key="index" class="theme-item">
      <div class="theme-preview" :style="{ backgroundImage: `url(${$baseUrl}${item.preview})` }"/>
      <div class="theme-info">
        <div>{{item.title}}</div>
        <div>
          <el-button v-if="activeName === item.name" type="success" icon="el-icon-check" round>已激活</el-button>
          <el-button v-else round @click="handleSelectTheme(item.name)">使用</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'd2-theme-list',
  data () {
    return {
      table: {
        showHeader: false,
        border: true
      }
    }
  },
  computed: {
    ...mapState('d2admin/theme', [
      'list',
      'activeName'
    ])
  },
  methods: {
    ...mapActions('d2admin/theme', [
      'set'
    ]),
    handleSelectTheme (name) {
      this.set(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-preview {
  height: 50px;
  width: 100px;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid $color-border-1;
}
.theme-list {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  .theme-item {
    /* min-width: 300px; */
    display: flex;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    /* background: #000; */
    transition: background .2s ease;
    &:hover {
      background: #00000013;
    }
    .theme-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
