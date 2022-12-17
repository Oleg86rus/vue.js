<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-block>
      <template v-slot:header>
        <h3>Это заголовок!</h3>
      </template>
      <p>Это самый важный текст для нового блока</p>

      <template #footer>
        <h3>FOOTER</h3>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './components_old_example/AppBlock.vue'


export default {
  components: { AppBlock }
}
</script>



<style lang="scss" scoped>

</style>
