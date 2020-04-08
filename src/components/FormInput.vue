<template>
  <div></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.FormInput {
  text-align: left;
  margin-bottom: 20px;
  display: inline-flex;
  flex-direction: column;

  &__label {
    @include size-xs;
  }

  &__input {
    @include font-muli-regular;
    @include size-s;
    border: none;
    border-bottom: 1px solid $colorGreyLight;
    padding: 11px 20px;
  }

  &--error {
    .FormInput__label {
      color: red;
    }

    .FormInput__input {
      border-bottom-color: red;
      border-bottom-width: 2px;
    }
  }

  &:last-child {
    margin-bottom: 40px;
  }
}
</style>
