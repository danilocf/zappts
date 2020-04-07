<template>
  <div class="PageNotFound">
    <h1>404. Page not found :(</h1>
    <router-link :to="{ name: 'Index' }">Voltar para Home</router-link>
  </div>
</template>

<style lang="scss">
.PageNotFound {
  text-align: center;
}
</style>
