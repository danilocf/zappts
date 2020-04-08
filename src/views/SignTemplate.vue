<template>
  <div class="SignTemplate">
    <div class="SignTemplate__col SignTemplate__col--theme">
      <Slider />
    </div>
    <div class="SignTemplate__col">
      <div class="flex-end">
        <router-link to="/" class="SignTemplate__logo"
          ><b>Invision</b></router-link
        >
      </div>
      <p class="SignTemplate__title">{{ title }}</p>
      <div class="SignTemplate__view">
        <transition name="fade" mode="out-in">
          <router-view @setTitle="setTitle" />
        </transition>
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

<style lang="scss" scoped>
.SignTemplate {
  display: flex;

  &__col {
    width: 100%;
    min-height: 100vh;
    padding: 5rem;

    &--theme {
      background-color: $colorTheme;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__logo {
    @include size-xl;
    // TODO: font-family Avenir
    color: #000;
    text-decoration: none;
  }

  &__title {
    @include size-l;
    color: $colorGreyLight;
    text-align: center;
    margin: 80px 0;
  }

  &__view {
    color: $colorGreyLight;
    text-align: center;
    width: 100%;
    max-width: 430px;
    margin: auto;
  }

  @include break-max-xl {
    &__col {
      padding: 3rem;
    }
    
    &__title {
      margin: 50px 0;
    }
  }

  @include break-max-md {
    flex-direction: column;

    &__col {
      min-height: initial;
      padding: 2rem;

      &--theme {
        padding: 2rem;
      }
    }

    &__logo {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
