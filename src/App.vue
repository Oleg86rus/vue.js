<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      
      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>
      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <app-loader v-if="loading"></app-loader>
    <app-people-list
        v-else
        :people="people"
        @load="loadPeople"
        @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './components/http/AppPeopleList.vue'
import axios from 'axios'
import AppAlert from './components/AppAlert.vue'
import AppLoader from './components/http/AppLoader.vue'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadPeople()
  },
  components: {AppPeopleList, AppAlert, AppLoader},
  methods: {
    async createPerson() {
      const response = await fetch('https://vue-with-http-be192-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Contend-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })
      const firebaseData = await response.json()

      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })

      this.name = ''
      this.alert = null
    },
    async removePerson(id) {
      try {
        const name = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue-with-http-be192-default-rtdb.firebaseio.com/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно',
          text: `Пользователь с именем ${name} был удален`
        }
      } catch (e) {
        console.error(e.message)
      }

    },
    async loadPeople() {
      try {
        this.loading = true
        const { data } = await axios.get('https://vue-with-http-be192-default-rtdb.firebaseio.com/people.json')
        if (!data) {
          throw new Error('Список людей пуст')
        }
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        this.loading = false
        this.alert = null
      } catch (e) {
        this.loading = false
        this.alert = {
          type: 'danger',
          title: 'Ошибка',
          text: e.message
        }
      }

    }
  }
}
</script>

<style>

</style>
