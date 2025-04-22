<template>
  <ul class="news-list">
    <li>编号：{{ router.params.id }}</li>
    <li>标题：{{ router.params.title }}</li>
    <li>内容：{{ router.params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
// import { toRefs } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
console.log(router);
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  color: aqua;
  line-height: 30px;
}
</style>
