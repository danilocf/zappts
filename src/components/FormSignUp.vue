<template>
  <div class="FormSignUp">
    <form @submit.prevent="validate">
      <div class="flex-column">
        <FormInput
          v-model="form.fullname"
          id="fullname"
          label="Full Name"
          :error="errors.fullname"
          :loading="loading"
        />
        <FormInput
          v-model="form.user"
          id="user"
          label="Users name or Email"
          :error="errors.user"
          :loading="loading"
        />
        <FormInput
          v-model="form.password"
          type="password"
          id="password"
          label="Create Password"
          :error="errors.password"
          :loading="loading"
        />
      </div>
      <BtnSubmit :label="btnLabel" :disabled="btnDisabled" />
    </form>
    <SpacerGoogleAuth />
    <BtnGoogleAuth actionLabel="Sign up" />
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
import BtnSubmit from "@/components/BtnSubmit";
import SpacerGoogleAuth from "@/components/SpacerGoogleAuth";
import BtnGoogleAuth from "@/components/BtnGoogleAuth";
import ServiceApi from "@/services/ServiceApi.js";

export default {
  components: {
    FormInput,
    BtnSubmit,
    SpacerGoogleAuth,
    BtnGoogleAuth
  },
  data() {
    return {
      form: {
        fullname: null,
        user: null,
        password: null
      },
      errors: {
        fullname: null,
        user: null,
        password: null
      },
      loading: false
    };
  },
  watch: {
    "form.fullname": function() {
      this.errors.fullname = null;
    },
    "form.user": function() {
      this.errors.user = null;
    },
    "form.password": function() {
      this.errors.password = null;
    }
  },
  computed: {
    anyErrors() {
      return this.errors.fullname || this.errors.user || this.errors.password;
    },
    btnLabel() {
      return this.loading ? "Loading..." : "Sign up";
    },
    btnDisabled() {
      return this.anyErrors || this.loading;
    }
  },
  methods: {
    validate() {
      if (!this.form.fullname || !this.form.fullname.trim("").length) {
        this.errors.fullname = true;
      }
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
        console.log("form", JSON.stringify(this.form));
        const { data } = await ServiceApi.postSignUp(this.form);
        console.log("submit", JSON.stringify(data));
        this.$router.push({ name: "SignIn" });
      } catch (error) {
        console.log("submit", error);
      } finally {
        this.loading = false;
        this.form.fullname = null;
        this.form.user = null;
        this.form.password = null;
      }
    }
  }
};
</script>
