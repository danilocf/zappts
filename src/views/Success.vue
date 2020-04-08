<template>
  <div class="Success">
    <p><small>* this is an example page</small></p>
    <h1>Success! You are now logged in</h1>
    <router-link :to="{ name: 'Index' }">Go back</router-link>
  </div>
</template>

<style lang="scss" scoped>
.Success {
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
