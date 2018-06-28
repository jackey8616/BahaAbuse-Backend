<template>
  <div id="app" class="container">
    <!--img src="./assets/logo.png"-->
    <router-view/>
    <router-view name="ArticleList"/>
    <router-view name="ArticleInfo"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

@import '~bootstrap/scss/bootstrap';
</style>
