<template>
  <div class="container">
    <div class="card" >
      <h2>{{ $i18n('app.title') }}</h2>
      <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
    </div>
  </div>
</template>

<script>


export default {
  inject: ['changeI18nLang'],
  methods: {
    changeLang() {
      this.changeI18nLang()
      this.$forceUpdate()
    }
  }
}
</script>

<style>

</style>
