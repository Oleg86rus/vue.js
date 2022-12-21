<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение, будьте бдительны!"
        title="Внимание"
        type="warning"
        closable
        @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert.vue'
import alertMixin from '../alertMixin'

export default {
  components: {AppAlert},
  mixins: [alertMixin]
}
</script>

<style>

</style>
