<template>
  <div class="FormInput" :class="{ 'FormInput--error': !!error }">
    <label :for="id" class="FormInput__label">
      {{ label }}
      <template v-if="error">
        * This field can not be empty
      </template>
    </label>
    <input
      :value="value"
      :type="type"
      class="FormInput__input"
      :id="id"
      :name="id"
      @input="onInput"
      :disabled="loading"
      maxlength="50"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    error: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
};
</script>

<style lang="scss" scoped>
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
