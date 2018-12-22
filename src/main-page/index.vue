<template>
  <div class="main-page">
    <div class="main-page-header">
        <div class="loading"></div>
        <p>{{ msg }}</p>
    </div>

    <p>有问题可以邮件联系我，Email：duangci@aliyun.com</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Fat-UI-Lib"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-page-header {
    display: flex;
    align-items: center;
  }

  .loading {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url(/static/img/loading.gif) center;
  }
}
</style>
