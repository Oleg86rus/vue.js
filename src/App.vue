<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <app-news
        v-for="item in news"
        :title="item"
        :key="item"
    >
    </app-news>

  </div>
</template>

<script>
import AppNews from './components/AppNews.vue'
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
          'Изучаем Vue 3',
          'Vue 3 успешно работает'
      ]
    }
  },
  components: {
    // 'app-news': AppNews
    // 'AppNews': AppNews
    AppNews
  }
}
</script>



<style lang="scss">

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
