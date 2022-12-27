<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({ value: 10, delay: 250 })">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './components/TheNavbar.vue'
export default {
  components: {TheNavbar},
  // computed: mapGetters(['counter', 'doubleCounter', 'uppercaseTitle']),
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({
      add: 'count/increment'
    }),
    // add() {
    //   this.increment
    //   // this.$store.commit('increment')
    // },
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 250
    //   })
    // },
    decrement() {
      this.$store.state.counter++
    }
  }
}
</script>

<style>
</style>
