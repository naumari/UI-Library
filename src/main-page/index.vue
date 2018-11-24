<template>
  <div class="main-page">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Fat Ge page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
