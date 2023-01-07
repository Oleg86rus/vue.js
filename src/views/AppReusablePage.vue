<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="primary"
      @close="close"
  ></app-alert>
  <div class="card">
    <h1>Переиспользование</h1>

    <button class="btn primary" @click="toggle">{{ alert ? "Закрыть" : "Показать" }} сообщение</button>
    <button class="btn primary" @click="navigate">Перейти на главную</button>

  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../component/AppAlert.vue'
import { useAlert } from '../use/alert'

export default {
  name: 'AppReusablePage',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const navigate = () =>  router.push('/')

    return {
      navigate,
      ...useAlert(true)
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>

</style>