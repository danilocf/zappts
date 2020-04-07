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
    color: #000;
    font-family: $fontFamilyLato;
    background-color: #fff;
    border: none;
    border-radius: 100px;
    box-shadow: 0px 3px 6px $colorGreyDark;
    padding: 7px 30px;
    margin-bottom: 40px;
    display: inline-flex;
    align-items: center;

    img {
      width: 29px;
      height: 30px;
      margin-right: 20px;
    }

    &:hover {
      box-shadow: 0px 3px 6px #00000039;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 3px 6px #00000059;
    }
  }
}
</style>
