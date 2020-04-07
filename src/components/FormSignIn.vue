<template>
  <div class="FormSignIn">
    <form @submit.prevent="submit">
      <div class="flex-column">
        <div class="FormInput">
          <label for="user" class="FormInput__label">Users name or Email</label>
          <input
            v-model="form.user"
            type="text"
            class="FormInput__input"
            id="user"
            name="user"
            required
          />
        </div>
        <div class="FormInput">
          <label for="password" class="FormInput__label">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="FormInput__input"
            id="password"
            name="password"
            required
          />
        </div>
        <small class="FormSignIn__resetPassword">Forget password?</small>
      </div>
      <BtnSubmit label="Sign in" />
    </form>
    <SpacerGoogleAuth />
    <BtnGoogleAuth actionLabel="Sign in" />
  </div>
</template>

<script>
import BtnSubmit from "@/components/BtnSubmit";
import SpacerGoogleAuth from "@/components/SpacerGoogleAuth";
import BtnGoogleAuth from "@/components/BtnGoogleAuth";

export default {
  components: {
    BtnSubmit,
    SpacerGoogleAuth,
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

<style lang="scss">
.FormSignIn {
  .FormSignIn__resetPassword {
    text-align: right;
    font-size: $fontSizeXS;
    margin-top: -10px;
    margin-bottom: 20px;
  }
}
</style>
