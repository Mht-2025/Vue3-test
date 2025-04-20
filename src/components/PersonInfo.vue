<template>
  <div class="person">
   姓：<input type="text" v-model="firstName"><br>
   名：<input type="text" v-model="LastName"><br>
   <!-- <button @click="getName">姓名</button>{{ AllName }} -->
    <span>全名：{{ AllName }}</span>
    <button @click="changeName">改名</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
import { ref ,computed} from 'vue';
const firstName = ref('张');
const LastName = ref('三');

 // 计算属性——只读取，不修改
  /* let fullName = computed(()=>{
    return firstName.value + '-' + lastName.value
  }) */

const AllName = computed({
  get(){
    return firstName.value +"-"+ LastName.value;
  },
  set(val){
    console.log("有人给名啦",val);
    //以“-”分割并分别取出
    firstName.value = val.split('-')[0];
    LastName.value = val.split('-')[1];
  }
});
  function changeName(){
    AllName.value = 'hao-四';
  }
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
</style>
