<template>
  <div class="container">
    <div class="card" >
      <button class="btn primary" @click="modal = true">Открыть модалку</button>
      <teleport to="body">
        <app-modal
            v-if="modal"
            @close="modal = false"
        ></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  components: {AppModal},
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style>

</style>
