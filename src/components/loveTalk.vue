<template>
  <div class="count">
    <button @click="getLoveTalk">获取一句渣男语录</button>
    <ul v-for="p in talkList" :key="p.id">
      <li>{{ p.title }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="loveTalk">
import { storeToRefs } from "pinia";
import { useTalkStore } from "../store/lovetalk";
const talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);
console.log(talkStore);

function getLoveTalk() {
  talkStore.grtATalk();
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
