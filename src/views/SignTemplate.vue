<template>
  <div class="SignTemplate">
    <div class="SignTemplate__col SignTemplate__col--theme">
      <Slider />
    </div>
    <div class="SignTemplate__col">
      <router-link to="/" class="SignTemplate__logoText"
        ><h1><b>Invision</b></h1></router-link
      >
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
    padding: 1rem 3rem 2rem;
    // FIXME:
    // padding: 112px 0;

    &--theme {
      padding: 4rem 3rem 2rem;
      background-color: $colorTheme;
    }
  }

  &__logoText {
    text-align: right;
    color: #000;
    text-decoration: none;

    h1 {
      // TODO: font-family Avenir
      font-size: $fontSizeXl;
    }
  }

  &__title {
    color: $colorGreyLight;
    font-size: $fontSizeL;
    text-align: center;
    margin: 50px 0;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  &__view {
    color: $colorGreyLight;
    text-align: center;
    width: 100%;
    max-width: 430px;
    margin: auto;
  }
}
</style>
