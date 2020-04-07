<template>
  <div class="LayoutColumn">
    <div class="col">
      <Slider />
    </div>
    <div class="col">
      <h1>Invision</h1>
      <p>{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  components: {
    Slider
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.LayoutColumn {
  display: flex;
}
</style>
