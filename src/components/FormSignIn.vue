<template>
  <div class="FormSignIn">
    <form @submit.prevent="submit">
      <div class="flex-column">
        <div>
          <label for="user">Users name or Email</label>
          <input
            v-model="form.user"
            type="text"
            id="user"
            name="user"
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <router-link to="">Forget password?</router-link>
      </div>
      <button type="submit">Sign in</button>
    </form>
    <SpacerFormGoogle />
    <BtnGoogleAuth actionLabel="Sign in" />
  </div>
</template>

<script>
import SpacerFormGoogle from "@/components/SpacerFormGoogle";
import BtnGoogleAuth from "@/components/BtnGoogleAuth";

export default {
  components: {
    SpacerFormGoogle,
    BtnGoogleAuth
  },
  data() {
    return {
      form: {
        user: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
      console.log("submit", JSON.stringify(this.form));
    }
  }
};
</script>
