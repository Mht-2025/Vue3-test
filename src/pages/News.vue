<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id" @click="showNews(news)">
        <!-- <button @click="showNews(news)">查看新闻</button> -->
        {{ news.title }}
        <!-- <router-link
          :to="{
            name: 'xinwenxiangqing',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
        >
          {{ news.title }}
        </router-link> -->
      </li>
    </ul>
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { useRouter } from "vue-router";
import { reactive } from "vue";

const newsList = reactive([
  { id: "jhehofkg01", title: "好消息！好消息！", content: "梅海婷要暴富啦！" },
  { id: "jhehofkg02", title: "找工作?", content: "梅海婷竟然一周收到三个offer" },
  { id: "jhehofkg03", title: "新闻003", content: "新闻内容003" },
  { id: "jhehofkg04", title: "新闻004", content: "新闻内容004" },
]);
// 新闻类型 interface 解释 https://www.typescriptlang.org/docs/handbook/2/objects.html
interface News {
  id: string;
  title: string;
  content: string;
}
const router = useRouter();
function showNews(news: News) {
  router.push({
    name: "xinwenxiangqing",
    query: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  });
}
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li {
  cursor: pointer;
}
/* 列表项前缀 */
.news li::marker {
  color: pink;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
