<template>
    <div id="app">
        <!-- <contentList></contentList> -->

      <router-view></router-view>
    </div>
</template>

<script>
// import contentList from './components/contentList'

export default {
    name: 'app',
}
</script>

<style>
@import 'assets/reset.css';
@import 'assets/common.css';
    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }*/
</style>
