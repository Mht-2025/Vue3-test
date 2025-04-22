<template>
  <div class="news">
    <ul>
      <li v-for="p in newsList" :key="p.id">
        <router-link to="/news/detail">{{ p.tital }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from "vue";

const newsList = reactive([
  { id: "jhehofkg01", tital: "新闻001", content: "新闻内容001" },
  { id: "jhehofkg02", tital: "新闻002", content: "新闻内容002" },
  { id: "jhehofkg03", tital: "新闻003", content: "新闻内容003" },
  { id: "jhehofkg04", tital: "新闻004", content: "新闻内容004" },
]);
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
  list-style: none;
  padding-left: 10px;
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
