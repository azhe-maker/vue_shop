<template>
  <div>
    <el-form>
      <el-button @click="loginOut" type="primary" size="mini">退出</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    loginOut() {
      window.sessionStorage.getItem('token', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
