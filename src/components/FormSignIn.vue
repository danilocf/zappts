<template>
  <div class="FormSignIn">
    <form @submit.prevent="submit">
      <div class="flex-column">
        <div class="FormInput" :class="{ 'FormInput--error': !!errors.user }">
          <label for="user" class="FormInput__label">
            Users name or Email
            <template v-if="errors.user"
              >* This field can not be empty</template
            >
          </label>
          <input
            v-model="form.user"
            type="text"
            class="FormInput__input"
            id="user"
            name="user"
            @input="errors.user = null"
          />
        </div>
        <div
          class="FormInput"
          :class="{ 'FormInput--error': !!errors.password }"
        >
          <label for="password" class="FormInput__label">
            Password
            <template v-if="errors.password"
              >* This field can not be empty</template
            >
          </label>
          <input
            v-model="form.password"
            type="password"
            class="FormInput__input"
            id="password"
            name="password"
            @input="errors.password = null"
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
      },
      errors: {
        user: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
      if (!this.form.user || !this.form.user.trim("").length) {
        this.errors.user = true;
      }
      if (!this.form.password || !this.form.password.trim("").length) {
        this.errors.password = true;
      }
      if (this.errors.user || this.errors.password) return;
      alert(JSON.stringify(this.form));
      this.form.user = null;
      this.form.password = null;
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
