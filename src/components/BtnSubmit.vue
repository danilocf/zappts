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
    @include font-muli-regular;
    @include base-button;
    color: #fff;
    background-color: $colorGreyLight;
    padding: 12px 60px;
  }
}
</style>
