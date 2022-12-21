<template>
  <div class="container">
    <div class="card">
      <h2>Разговор про директивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input type="text" id="inp" v-focus>
      </div>
    </div>
  </div>
</template>

<script>

import focusDirective from './focusDirective'

export default {
  directives: {
    focus: focusDirective
  }
}
</script>

<style>

</style>
