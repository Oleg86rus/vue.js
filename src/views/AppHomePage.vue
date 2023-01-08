<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="danger"
      @close="close"
  ></app-alert>

  <div class="container with-nav">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>

      <div class="form-control">
        <input type="text" v-model="firstName"/>
      </div>

      <button class="btn" @click="change">Изменить</button>
      <button class="btn danger" @click="toggle">Alert</button>
    </div>

    <FrameworkInfo :name="name" :version="version" @change-version="changeVersion"/>
  </div>
</template>

<script>
import FrameworkInfo from '../component/FrameworkInfo.vue'
import AppAlert from '../component/AppAlert.vue'
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onUpdated,
  onMounted,
  onUnmounted
} from 'vue'
import { useAlert } from '../use/alert'

export default {
  setup() {
    const {alert, toggle, close} = useAlert()
    const name = ref('VueJS')
    const version = ref('3')
    const firstName = ref('')

    const framework = reactive({
      name: ref('VueJS'),
      version: ref('3')
    })
    console.log('created')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })


    watch(firstName, (newValues, oldValues) => {
      console.log(newValues)
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 31
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      firstName,
      changeVersion,
      alert,
      toggle,
      close
    }
  },
  components: {FrameworkInfo, AppAlert}
}
</script>