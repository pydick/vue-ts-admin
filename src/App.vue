<template>
  <div id="app">
    <router-link to="/login">login</router-link> <br/>
    <router-link to="/404">404</router-link><br/>
    <router-link to="/">/</router-link><br/>
    <router-link to="/camera">camera</router-link><br/>
    <router-link to="/association">association</router-link><br/>
    <router-link to="/face">face</router-link><br/>
    <router-link to="/preview">preview</router-link><br/>
    <router-link to="/record">record</router-link><br/>
    <router-link to="/system">system</router-link><br/>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
