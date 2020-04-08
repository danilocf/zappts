<template>
  <div class="BtnGoogleAuth">
    <button>
      <img src="@/assets/Google__G__Logo.svg" alt="Logo Google" />
      {{ actionLabel }} with Google
    </button>
  </div>
</template>

<script>
export default {
  props: {
    actionLabel: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.BtnGoogleAuth {
  button {
    @include font-lato-regular;
    @include base-button;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 3px 6px $colorGreyDark;
    padding: 7px 30px;

    img {
      width: 29px;
      height: 30px;
      margin-right: 20px;
    }
  }
}
</style>
