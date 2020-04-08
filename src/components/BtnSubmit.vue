<template>
  <div class="BtnSubmit">
    <button type="submit" :disabled="disabled">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.BtnSubmit {
  button {
    @include font-muli-regular;
    @include base-button;
    color: #fff;
    background-color: $colorGreyLight;
    padding: 12px 60px;
  }
}
</style>
