<template>
  <div class="count">
    <h1>getters的使用</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <h2>放大10倍{{ bigSum }}</h2>
    <h3>欢迎来到:{{ school }}，坐落于：{{ address }}</h3>
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
import { useCountStore } from "../store/count";
import { storeToRefs } from "pinia";

const n = ref(1); //用户当前选中的数字
const countStore = useCountStore();
// storeToRefs 只会关注store中的属性，不会关注store中的方法，同时会将store中的属性转为响应式数据
const { sum, school, address, bigSum } = storeToRefs(countStore);
console.log("countStore", storeToRefs(countStore));

console.log("qq", sum);
// function add() {
//   countStore.sum += n.value;
// }
// function minus() {
//   countStore.sum -= n.value;
// }
function add() {
  // 第一种修改方式
  countStore.sum += n.value;
  // 第二种修改方式 $patch
  // countStore.$patch({
  //   school: "尚硅谷",
  //   address: "北京",
  // });
  // 第三种修改方式 使用action
  // countStore.increment(n.value);
}
function minus() {
  countStore.sum -= n.value;
}
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
