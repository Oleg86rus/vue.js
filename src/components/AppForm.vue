<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
      <!--      <div class="form-control" :class="{invalid: errors.name}">-->
      <!--        <label for="name">Как тебя зовут?</label>-->
      <!--        <input-->
      <!--            type="text"-->
      <!--            id="name"-->
      <!--            placeholder="Введите имя"-->
      <!--            v-model.trim="name"-->
      <!--        >-->
      <!--        <small v-id="errors.name">{{ errors.name }}</small>-->
      <!--      </div>-->
      <app-input
          placeholder="Введите имя"
          :error="errors.name"
          label="Как тебя зовут"
          v-model:value="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            v-model.number="age"
            max="70"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="VueCli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="VueRouter"/> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './AppInput.vue'

export default {
  components: { AppInput },
  methods: {
    formIsValid() {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'Имя не может быть пустым'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitForm() {
      if (this.formIsValid()){
        console.group('Form data')
        console.log('Name: ', this.name)
        console.log('Age: ', this.age)
        console.log('City: ', this.city)
        console.log('To Tokyo: ', this.relocate)
        console.log('Skills: ', this.skills)
        console.groupEnd()
      }

    }
  },
  data() {
    return {
      name: '',
      age: 23,
      city: 'nsk',
      relocate: null,
      skills: [],
      errors: {
        name: null
      }
    }
  }
}
</script>

<style>
.form-control small {
  color: red;
}
.form-control.invalid input {
  border-color: red;
}
</style>
