<template>
  <div className="container">
    <div className="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>

      <div class="form-control">
<!--        <input type="text" ref="textInput"/>-->
        <input type="text" v-model="firstName"/>
      </div>

      <button className="btn" @click="change">Изменить</button>
    </div>

    <FrameworkInfo :name="name" :version="version"/>
  </div>
</template>

<script>
import FrameworkInfo from './component/FrameworkInfo.vue'
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch
} from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref('3')
    const textInput = ref(null)
    const firstName = ref('')

    const framework = reactive({
      name: ref('VueJS'),
      version: ref('3')
    })

    watch(firstName, (newValues, oldValues) => {
      console.log(newValues)
      console.log(oldValues)
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 31
    }
    return {
      name, version,
      change: changeInfo,
      firstName
    }
  },
  components: {FrameworkInfo}
}
</script>