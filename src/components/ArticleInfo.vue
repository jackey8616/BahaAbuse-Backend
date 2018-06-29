<template>
  <div>
      <p>Summary: {{ subboardFit(article.summary.summaryId) }}</p>
      <p>
        Title: {{ article.main.title }}
        <a title="Crawled Data" :href="'https://forum.gamer.com.tw/' + article.main.url">
          <font-awesome-icon :icon="['fas', 'location-arrow']"></font-awesome-icon>
        </a>
      </p>
      <p>Reply / View: {{ article.count.reply }} / {{ article.count.view}}</p>
      <p>
        Author: {{ article.count.user.user }}
        <a title="Crawled Data" :href="'https://' + article.count.user.url">
          <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
        </a>
      </p>
      <p>Simhash: {{ article.content.body.simhash }}</p>
      <p>Article:</p>
      <article v-html="article.content.body.html"/>
  </div>
</template>

<script>
export default {
  name: 'article-info',
  data () {
    return {
      subboards: {},
      article: {
        summary: {},
        main: {},
        count: {
          user: {}
        },
        content: {
          header: null,
          body: {
            html: null,
            simhash: null
          }
        }
      }
    }
  },
  methods: {
    subboardFit: function (id) {
      return this.subboards[id]
    }
  },
  mounted () {
    this.$ajax({
      'method': 'get',
      'url': 'http://localhost:8000/api/article',
      'params': this.$route.params
    }).then(response => {
      this.subboards = response.data.response.subboards
      this.article = response.data.response.article
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
