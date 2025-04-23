<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <!-- 下拉列表 -->
    <!-- v-model.number="n" 表示将输入的值转为数字类型 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts" name="loveTalk">
import { ref } from "vue";
const sum = ref(1); //当前求和
const n = ref(1); //用户当前选中的数字
const add = () => {
  sum.value += n.value;
};
const minus = () => {
  sum.value -= n.value;
};
</script>
<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
