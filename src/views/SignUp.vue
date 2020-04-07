<template>
  <div class="SignUp">
    <FormSignUp />
    <p>By signing up, you agree to <b>Invision</b></p>
    <p>
      <router-link to="">Terms of Conditions</router-link> and
      <router-link to="">Privacy Policy</router-link>
    </p>
    <p>
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
