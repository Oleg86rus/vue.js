<template>
  <div className="container">
    <div className="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <button className="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive} from 'vue'
export default {
  setup() {
    const name = ref('VueJS')
    const version = ref('3')
    // const framework = ref({

    console.log(isRef(name))
    console.log(isRef(version.value))

    const framework = reactive({
      name: ref('VueJS'),
      version: ref('3')
    })
    console.log(isReactive(framework.name))
    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 31
      // framework.name = 'Vue JS !'
      // framework.version = 31
    }
    return {
      name: name,
      version: version,
      // ...toRefs(framework),
      // framework: framework,
      change: changeInfo
    }
  },
  // data () {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo () {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>