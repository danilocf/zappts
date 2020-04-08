<template>
  <div class="Slider">
    <img class="Slider__img" src="@/assets/Data_compressed.png" alt="Slider image" />
    <transition name="fade" mode="out-in">
      <template v-for="(item, index) in items">
        <div v-if="item.active" :key="index">
          <p class="Slider__title">{{ item.title }}</p>
          <p class="Slider__text">{{ item.text }}</p>
        </div>
      </template>
    </transition>
    <template v-for="(item, index) in items">
      <button
        class="Slider__btn"
        :class="{ 'Slider__btn--active': item.active }"
        :key="`button${index}`"
        @click.prevent="jump(index)"
      ></button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          active: true,
          title: "Marcenas mattis egestas",
          text:
            "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."
        },
        {
          active: false,
          title: "Marcenas mattis egestas 2",
          text:
            "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta. 2"
        },
        {
          active: false,
          title: "Marcenas mattis egestas 3",
          text:
            "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta. 3"
        },
        {
          active: false,
          title: "Marcenas mattis egestas 4",
          text:
            "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta. 4"
        }
      ],
      jumpInterval: null
    };
  },
  mounted() {
    this.setJumpInterval();
  },
  destroyed() {
    clearInterval(this.jumpInterval);
  },
  methods: {
    setJumpInterval() {
      this.jumpInterval = setInterval(() => {
        const items = this.items;
        const activeItem = items.filter(i => i.active)[0];
        const activeIndex = items.indexOf(activeItem);
        const nextIndex =
          activeIndex + 1 > items.length - 1 ? 0 : activeIndex + 1;
        activeItem.active = false;
        items[nextIndex].active = true;
      }, 3000);
    },

    jump(index) {
      clearInterval(this.jumpInterval);
      this.items.forEach(i => {
        i.active = false;
      });
      this.items[index].active = true;
      this.$nextTick(this.setJumpInterval);
    }
  }
};
</script>

<style lang="scss" scoped>
.Slider {
  color: #fff;
  text-align: center;

  &__img {
    width: 80%;
    max-width: 700px;
    max-height: 555px;
  }

  &__title {
    @include size-l;
    margin: 20px auto;
  }

  &__text {
    @include size-m;
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
    padding: 0;
    opacity: 0.5;
    cursor: pointer;
    transition: all linear 0.1s;

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

    line-height: normal;
    -webkit-appearance: none;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
}
</style>
