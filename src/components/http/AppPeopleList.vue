<template>
  <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person.id">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">Удалить</button>
    </div>
  </div>
  <div class="card center" v-else>
    <p>Людей пока нет</p>
    <button class="btn" @click="$emit('load')">Загрузить список</button>
  </div>
</template>

<script>
export default {
  name: 'AppPeopleList',
  props: ['people'],
  emits: ['load', 'remove']
}
</script>

<style scoped>
  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>