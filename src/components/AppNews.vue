<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</button>
    <button class="btn danger" v-if="wasRead" @click="$emit('unmark',this.id)">Отметить непрочитанной</button>
    <div v-if="isNewsOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet.</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNews',
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) this.$emit('open-news')
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unMark() {
    //   this.$emit('unmark', this.id)
    // }
  },
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) return true
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  // props: ['title']
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        console.log(value)
        return value === true || value === false
      }
    },
    wasRead: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>