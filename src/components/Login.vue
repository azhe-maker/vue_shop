<template>
  <div class="logi_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.logi_container {
  height: 100%;
  .login_box {
    width: 450px;
    height: 350px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0, 0, 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: skyblue;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #eee;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
</style>
