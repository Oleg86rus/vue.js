<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение, будьте бдительны!"
        title="Внимание"
        @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}
      </button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>


import AppAlert from './AppAlert'
import AppBlock from './AppBlock'
import alertMixin from '../alertMixin'

export default {
  components: {AppAlert, AppBlock},
  mixins: [alertMixin]
}
</script>

<style>

</style>
