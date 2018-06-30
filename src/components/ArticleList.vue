<template>
  <div class="list-wrap">
    <table class="table table-striped table-dark">
      <thead>
        <tr class="list__head">
          <td></td>
          <td></td>
          <td>回覆 / 人氣</td>
          <td>最後發表</td>
        </tr>
      </thead>
      <tbody>
        <tr class="list__row" v-for="(item) in articles" :key="item.main.url">
          <td class="list__summary">
            <p>{{ subboardFit(item.summary.summaryId) }}</p>
            <span class="list__summary__gp gp gp--normal" v-if="item.summary.gp > 0">{{ item.summary.gp }}</span>
          </td>
          <td class="list__main">
            <a class="list__main__title" title="Link to Origin Article" v-if="articleExist(item.detail)" :href="'https://forum.gamer.com.tw/' + item.main.url">{{ item.main.title }}</a>
            <a class="list__main__titl is-del" v-else>{{ item.main.title }}</a>
            <a title="Crawled Data" v-if="articleExist(item.detail)" :href="articleUrl(item.detail)">
              <font-awesome-icon :icon="['fas', 'file']"></font-awesome-icon>
            </a>
          </td>
          <td class="list__count">
            <p class="list__count__number"><span>{{ item.count.reply }}</span> / <span>{{ item.count.view }}</span></p>
            <p class="list__count__user"><a :href="'https:' + item.count.user.url ">{{ item.count.user.user }}</a></p>
          </td>
          <td class="list__time">
            <p class="list__time__edittime"><a :href="'https://forum.gamer.com.tw/' + item.main.url + '&last=1'">{{ timeFormat(item.time.replyTime) }}</a></p>
            <p><a :href="'https:' + item.time.user.url ">{{ item.time.user.user }}</a></p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  data () {
    return {
      subboards: {},
      articles: []
    }
  },
  methods: {
    subboardFit: function (id) {
      return this.subboards[id]
    },
    timeFormat: function (time) {
      let jsDate = new Date(time * 1000).toISOString()
      let date = jsDate.split('T')[0].slice(2)
      let hourMin = jsDate.split('T')[1].slice(0, 5)
      return date + ' ' + hourMin
    },
    articleUrl: function (detail) {
      return `#/article-info/${detail.php}/${detail.bsn}/${detail.snA}/${detail.tnum}`
    },
    articleExist: function (detail) {
      return detail.php
    }
  },
  mounted () {
    this.$ajax({
      'method': 'get',
      'url': 'http://127.0.0.1:8000/api/article-list'
    }).then(response => {
      this.subboards = response.data.response.subboards
      this.articles = response.data.response.articles
    }).catch(response => {
      console.log(response)
    })
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  .list-wrap {
    margin-bottom: 10px;
    background: #FFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.33);
    margin-top: 8px;
  }
  .list__head {
    font-size: 12px;
    text-align: center;
  }
  .list__row.list__row--sticky {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  /* Summary */
  .list__summary {
    position: relative;
    padding: 7px 3px;
    padding-left: 24px;
    width: 100px;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
  }
  .list__summary__gp {
    display: block;
    margin: 0 auto;
    margin-bottom: -6px;
    font-family: "Teko", '黑體-繁', "蘋果儷中黑", "微軟正黑體", Microsoft JhengHei, sans-serif;
    font-size: 22px;
    width: 70px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .gp.gp--normal {
    color: #22A0AE;
  }
  /* Main */
  .list__main {
    vertical-align: middle;
    padding: 7px 12px;
    max-width: 600px;
    table-layout: fixed;
    word-wrap: break-word;
  }
  .list__main__title {
    vertical-align: middle;
    font-family: "微軟正黑體", Microsoft JhengHei, "黑體-繁", "蘋果儷中黑", sans-serif;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.5;
  }
  .list__main__title.is-del {
    color: #cccccc;
  }
  /* Count */
  .list__count {
    padding: 7px 12px;
    width: 135px;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
  }
  .list__count__number {
    margin-bottom: 4px;
  }
  .list__count__user {
    text-align: center;
  }
  /* Time */
  .list__time {
    padding: 7px 12px;
    width: 100px;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
  }
  .list__time__edittime {
    margin-bottom: 4px;
  }
</style>
