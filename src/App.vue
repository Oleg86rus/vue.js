<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
    <app-news
        v-for="item in news"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
        @unmark="unreadNews"
        :key="item.id"
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
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Изучаем Vue 3',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Vue 3 успешно работает',
          id: 2,
          isOpen: false,
          wasRead: false
        }

      ]
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      this.readRate++
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
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
