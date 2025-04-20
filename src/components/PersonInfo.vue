<template>
  <div class="person">
   <h1>回顾TS中的-接口-泛型-自定义类型</h1>
  </div>
</template>

<script setup lang="ts" name="PersonInfo">
import {type PersonInter,type Persons} from '../types/index'
const person:PersonInter = {id:'dbsafu01',name:'张三',age:23}
// const personList:PersonInter[]= [
//   {id:'dbsafu01',name:'张三',age:23},
//   {id:'dbsafu02',name:'李四',age:24},
//   {id:'dbsafu03',name:'王五',age:25}
// ]
// 定义一个变量personList，personList是一个数组，数组里的每一项都符合PersonInter接口规范
const personList:Persons= [
  {id:'dbsafu01',name:'张三',age:23},
  {id:'dbsafu02',name:'李四',age:24},
  {id:'dbsafu03',name:'王五',age:25}
]
console.log(personList);
console.log(person);

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
