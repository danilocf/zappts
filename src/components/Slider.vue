<template>
  <div class="Slider">
    <img class="Slider__img" src="@/assets/Data.png" alt="Slider image" />
    <p class="Slider__title">Marcenas mattis egestas</p>
    <p class="Slider__text">
      Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
      porta.
    </p>
    <button class="Slider__btn Slider__btn--active"></button>
    <button class="Slider__btn"></button>
    <button class="Slider__btn"></button>
    <button class="Slider__btn"></button>
  </div>
</template>

<style lang="scss">
.Slider {
  text-align: center;
  color: #fff;

  &__img {
    width: 80%;
    max-width: 700px;
    max-height: 555px;
  }

  &__title {
    font-size: $fontSizeL;
    margin: 20px auto;
  }

  &__text {
    font-size: $fontSizeM;
    max-width: 550px;
    margin: 0 auto 30px;
  }

  &__btn {
    display: inline-block;
    width: 12px;
    height: 11px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    margin: 0 6px;
    opacity: 0.5;
    cursor: pointer;

    &:focus {
      border: 1px solid #000;
      height: 14px;
      outline: none;
      box-shadow: 0px 3px 6px #00000059;
    }

    &--active {
      width: 26px;
      border-radius: 50px;
      opacity: 1;
    }
  }
}
</style>
