<template>
  <div class="BtnSubmit">
    <button type="submit">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.BtnSubmit {
  button {
    color: #fff;
    font-family: $fontFamilyMuli;
    background-color: $colorGreyLight;
    border: none;
    border-radius: 100px;
    padding: 12px 60px;
    margin-bottom: 40px;

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
