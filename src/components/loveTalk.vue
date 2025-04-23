<template>
  <div class="count">
    <button @click="getLoveTalk">获取一句渣男语录</button>
    <ul v-for="p in talkStore.talkList" :key="p.id">
      <li>{{ p.title }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="loveTalk">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";
import { useTalkStore } from "@/store/lovetalk";

const talkStore = useTalkStore();
console.log(talkStore);

async function getLoveTalk() {
  // 发请求，下面这行的写法是：连续解构赋值+重命名
  const {
    // 从data中解构出content，并重命名为title
    data: {
      result: { content: title },
    },
  } = await axios.get("https://apis.tianapi.com/zhanan/index?key=5486ac63e383652e77e061f234be40d5");
  console.log(title);
  // 把请求回来的字符串，包装成一个对象
  const obj = { id: nanoid(), title };
  // 放到数组中
  talkStore.talkList.unshift(obj);
}
</script>
<style scoped>
.count {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  margin: 25px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
