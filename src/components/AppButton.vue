<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  methods: {
    btnLog() {
      console.log('Button LOG')
    }
  }
}
</script>

<style scoped>

</style>