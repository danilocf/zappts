<template>
  <div class="FormSignUp">
    <form @submit.prevent="submit">
      <div class="flex-column">
        <div
          class="FormInput"
          :class="{ 'FormInput--error': !!errors.fullname }"
        >
          <label for="fullname" class="FormInput__label">
            Full Name
            <template v-if="errors.fullname"
              >* This field can not be empty</template
            >
          </label>
          <input
            v-model="form.fullname"
            type="text"
            class="FormInput__input"
            id="fullname"
            name="fullname"
            @input="errors.fullname = null"
          />
        </div>
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
            Create Password
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
      },
      errors: {
        fullname: null,
        user: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
      if (!this.form.fullname || !this.form.fullname.trim("").length) {
        this.errors.fullname = true;
      }
      if (!this.form.user || !this.form.user.trim("").length) {
        this.errors.user = true;
      }
      if (!this.form.password || !this.form.password.trim("").length) {
        this.errors.password = true;
      }
      if (this.errors.fullname || this.errors.user || this.errors.password)
        return;
      alert(JSON.stringify(this.form));
      this.form.fullname = null;
      this.form.user = null;
      this.form.password = null;
    }
  }
};
</script>
