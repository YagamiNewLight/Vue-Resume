<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-button type="primary">登录</el-button>
      <el-button>注册</el-button>
      <el-button @click="preview">预览</el-button>
    </div>
  </div>
</template>

<style lang="scss">
  #topbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size: 20px;
    align-items: center;
  }
</style>

<script>
  export default {
    methods: {
      preview() {
        this.$emit('preview')
      }
    }
  }
</script>
