<template>
  <div id="app" class="page-wrapper">
    <ul class="nav-sidebar-wrapper">
      <li>
        <router-link class="nav-sidebar-item" to="/">首页</router-link>
      </li>

      <li v-for="(item, index) in componentRouters" :key="index">
        <router-link class="nav-sidebar-item" :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  
    <router-view class="content-wrapper"/>
  </div>
</template>

<script>
const context = require.context('@/components/', true, /demo\.vue$/)
const componentRouters = context.keys().map(url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('/')
  const name = url.substring(start + 1, end)
  const path = `/${name}`
  
  return {
    name,
    path
  }
})

export default {
  name: 'App',
  data () {
    return {
      componentRouters
    }
  }
}
</script>

<style lang="scss">
.page-wrapper {
  display: flex;

  .nav-sidebar-wrapper {
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    width: 200px;
    .nav-sidebar-item {
      margin-bottom: 32px;
      display: inline-block;
      text-decoration: none;

      color: #1f2f3d;
    }
  }

  .content-wrapper {
    flex: 1;
    min-height: 100vh;
  }
}
</style>
