<template>
  <div class="SignIn">
    <FormSignIn />
    <p class="SignIn__text">
      New <b>Invision</b>?
      <router-link :to="{ name: 'SignUp' }">Create Account</router-link>
    </p>
  </div>
</template>

<script>
import FormSignIn from "@/components/FormSignIn";

export default {
  components: {
    FormSignIn
  },
  mounted() {
    this.$emit("setTitle", "Welcome to Invision");
  }
};
</script>

<style lang="scss">
.SignIn__text {
  font-size: $fontSizeXS;
}
</style>
