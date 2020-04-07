<template>
  <div class="SignTemplate">
    <LayoutColumn :title="layoutColumnTitle">
      <router-view @setTitle="setTitle" />
    </LayoutColumn>
  </div>
</template>

<script>
import LayoutColumn from "@/components/LayoutColumn";

export default {
  components: {
    LayoutColumn
  },
  data() {
    return {
      layoutColumnTitle: null
    };
  },
  methods: {
    setTitle(title) {
      this.layoutColumnTitle = title || null;
    }
  }
};
</script>
