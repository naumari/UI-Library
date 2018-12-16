<template>
  <div id="app" class="page-wrapper">
    <div class="header-wrapper">
      <span class="logo c-size-l">
        <fat-icon name="leak_add" size="32"/>Fat-UI Lib
      </span>

      <div class="btns c-size-m">
        <router-link class="link" to="/">首页</router-link>
        <a href class="link">作者简介</a>
      </div>
    </div>

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
const context = require.context("@/components/", true, /demo\.vue$/);
const componentRouters = context.keys().map(url => {
  const start = url.indexOf("/");
  const end = url.lastIndexOf("/");
  const name = url.substring(start + 1, end);
  const path = `/${name}`;

  return {
    name,
    path
  };
});

export default {
  name: "App",
  data() {
    return {
      componentRouters
    };
  }
};
</script>

<style lang="scss">
.page-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 64px;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: #444b57;
    .logo {
      display: inline-flex;
      align-items: center;
      .material-icons:first-child {
        margin-right: 8px;
      }
    }
    .btns {
      display: flex;
      justify-content: space-evenly;
      width: 200px;
      .link {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .nav-sidebar-wrapper {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    width: 240px;
    .nav-sidebar-item {
      display: inline-flex;
      box-sizing: border-box;
      width: 100%;
      padding: 0 32px;
      align-items: center;
      height: 40px;
      text-decoration: none;
      color: #1f2f3d;
      &.router-link-exact-active {
        color: #fff;
        background: #4d93ff;
      }
    }
  }

  .content-wrapper {
    position: absolute;
    top: 64px;
    left: 240px;
    right: 0;
    bottom: 0;
    padding: 64px 64px;
    border-left: 1px solid #bbb;
    z-index: 1;
    overflow: auto;
  }
}
</style>
