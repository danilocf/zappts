<template>
  <div class="FormSignUp">
    <form @submit.prevent="submit">
      <div class="flex-column">
        <div class="FormInput">
          <label for="fullname" class="FormInput__label">Full Name</label>
          <input
            v-model="form.fullname"
            type="text"
            class="FormInput__input"
            id="fullname"
            name="fullname"
            required
          />
        </div>
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
          <label for="password" class="FormInput__label">Create Password</label>
          <input
            v-model="form.password"
            type="password"
            class="FormInput__input"
            id="password"
            name="password"
            required
          />
        </div>
      </div>
      <BtnSubmit label="Sign up" />
    </form>
    <SpacerGoogleAuth />
    <BtnGoogleAuth actionLabel="Sign up" />
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
        fullname: null,
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
