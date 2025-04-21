<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="person">
    <h1>自定义hook</h1>
    <h2>当前求和：{{ sum }}</h2>
    <h2>放大20倍：{{ bigSum }}</h2>
    <button @click="add">点我+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" /><br />
    <button @click="getDog">再来一只</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useDog from "../hooks/useDog";
import useSum from "../hooks/useSum";
const { dogList, getDog } = useDog();
const { sum, add, bigSum } = useSum();
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
img {
  height: 200px;
  margin: 10px;
}
</style>
