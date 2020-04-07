<template>
  <div class="SignTemplate">
    <div class="SignTemplate__col SignTemplate__col--theme">
      <Slider />
    </div>
    <div class="SignTemplate__col">
      <div class="flex-end">
        <router-link to="/" class="SignTemplate__logoText"
          ><b>Invision</b></router-link
        >
      </div>
      <p class="SignTemplate__title">{{ title }}</p>
      <div class="SignTemplate__view">
        <router-view @setTitle="setTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  components: {
    Slider
  },
  data() {
    return {
      title: null
    };
  },
  methods: {
    setTitle(title) {
      this.title = title || null;
    }
  }
};
</script>

<style lang="scss">
.SignTemplate {
  display: flex;

  &__col {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 3rem;
    // FIXME:
    // padding: 112px 0;

    &--theme {
      padding: 4rem 3rem 2rem;
      background-color: $colorTheme;
    }
  }

  &__logoText {
    // TODO: font-family Avenir
    font-size: $fontSizeXl;
    color: #000;
    text-decoration: none;
  }

  &__title {
    color: $colorGreyLight;
    font-size: $fontSizeL;
    text-align: center;
    margin: 50px 0;
  }

  &__view {
    color: $colorGreyLight;
    text-align: center;
    width: 100%;
    max-width: 430px;
    margin: auto;
  }

  @media screen and (max-width: 968px) {
    flex-direction: column;

    &__col {
      min-height: initial;
      padding: 2rem;

      &--theme {
        padding: 2rem;
      }
    }

    &__logoText {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
