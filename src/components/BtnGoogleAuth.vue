<template>
  <div class="BtnGoogleAuth">
    <button>{{ actionLabel }} with Google</button>
  </div>
</template>

<script>
export default {
  props: {
    actionLabel: {
      type: String,
      required: true
    }
  }
};
</script>
