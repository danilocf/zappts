<template>
  <div class="PageNotFound">
    <h1>404. Page not found :(</h1>
    <router-link :to="{ name: 'Index' }">Go back</router-link>
  </div>
</template>

<style lang="scss" scoped>
.PageNotFound {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  h1 {
    margin: 20px 0;
  }
}
</style>
