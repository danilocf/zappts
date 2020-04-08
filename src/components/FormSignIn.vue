<template>
  <div class="FormSignIn">
    <form @submit.prevent="validate">
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
            :disabled="loading"
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
            :disabled="loading"
          />
        </div>
        <small class="FormSignIn__resetPassword">Forget password?</small>
      </div>
      <BtnSubmit :label="btnLabel" :disabled="btnDisabled" />
    </form>
    <SpacerGoogleAuth />
    <BtnGoogleAuth actionLabel="Sign in" />
  </div>
</template>

<script>
import BtnSubmit from "@/components/BtnSubmit";
import SpacerGoogleAuth from "@/components/SpacerGoogleAuth";
import BtnGoogleAuth from "@/components/BtnGoogleAuth";
import ServiceApi from "@/services/ServiceApi.js";

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
      },
      loading: false
    };
  },
  computed: {
    anyErrors() {
      return this.errors.user || this.errors.password;
    },
    btnLabel() {
      return this.loading ? "Loading..." : "Sign in";
    },
    btnDisabled() {
      return this.anyErrors || this.loading;
    }
  },
  methods: {
    validate() {
      if (!this.form.user || !this.form.user.trim("").length) {
        this.errors.user = true;
      }
      if (!this.form.password || !this.form.password.trim("").length) {
        this.errors.password = true;
      }
      if (this.anyErrors) return;
      this.submit();
    },

    async submit() {
      try {
        this.loading = true;
        const { data } = await ServiceApi.postSignIn(this.form);
        console.log("submit", JSON.stringify(data));
        this.$router.push({ name: "Success" });
      } catch (error) {
        console.log("submit", error);
      } finally {
        this.loading = false;
        this.form.user = null;
        this.form.password = null;
      }
    }
  }
};
</script>

<style lang="scss">
.FormSignIn {
  .FormSignIn__resetPassword {
    @include size-xs;
    text-align: right;
    margin-top: -10px;
    margin-bottom: 20px;
  }
}
</style>
