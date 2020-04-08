<template>
  <div class="SignUp">
    <FormSignUp />
    <p class="SignUp__text">By signing up, you agree to <b>Invision</b></p>
    <p class="SignUp__text">
      <router-link to="">Terms of Conditions</router-link> and
      <router-link to="">Privacy Policy</router-link>
    </p>
    <p class="SignUp__text">
      Already on <b>Invision</b>?
      <router-link :to="{ name: 'SignIn' }">Log in</router-link>
    </p>
  </div>
</template>

<script>
import FormSignUp from "@/components/FormSignUp";

export default {
  components: {
    FormSignUp
  },
  mounted() {
    this.$emit("setTitle", "Getting Started");
  }
};
</script>

<style lang="scss" scoped>
.SignUp {
  .SignUp__text {
    @include size-xs;

    &:last-child {
      margin-top: 20px;
    }
  }
}
</style>
