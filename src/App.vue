<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button :color="oneColor"  @action="active = 'one'">One</app-button>
      <app-button :color="twoColor" @action="active = 'two'">Two</app-button>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue'
import AppTextOne from './components/AppTextOne.vue'
import AppTextTwo from './components/AppTextTwo.vue'

export default {
  components: { AppButton, AppTextOne, AppTextTwo },
  computed: {
    componentName() {
      return 'app-text-' + this.active
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  data() {
    return {
      active: 'one' // two
    }
  }
}
</script>



<style lang="scss" scoped>

</style>
