<template>
  <div class="SpacerGoogleAuth">
    <div class="SpacerGoogleAuth__line"></div>
    <p class="SpacerGoogleAuth__text">Or</p>
    <div class="SpacerGoogleAuth__line"></div>
  </div>
</template>

<style lang="scss">
.SpacerGoogleAuth {
  display: inline-flex;
  align-items: center;
  margin-bottom: 40px;

  &__line {
    width: 150px;
    border-bottom: 0.5px solid $colorGreyLight;
    opacity: 0.5;
  }

  &__text {
    @include size-xs;
    margin: 0 16px;
  }

  @include break-lg {
    &__line {
      width: 70px;
    }
  }
}
</style>
