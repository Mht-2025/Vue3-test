<template>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>第一台车：{{ person.car.c1 }}</h2>
    <h2>第二台车：{{ person.car.c2 }}</h2>
    <button @click="changName">点击修改姓名</button>
    <button @click="changAge">点击修改年龄</button>
    <button @click="changC1">点击修改第一台车</button>
    <button @click="changC2">点击修改第二台车</button>
    <button @click="changCar">点击修改</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
import { log } from 'console'
import {  reactive, watch } from 'vue'
  const person = reactive({
    name: '张三',
    age: 18,
    car:{
      c1:'奔驰',
      c2:'保时捷'
    }
  })
  function changName(){
    person.name += "~"
  }
  function changAge(){
    person.age += 1
  }
  function changC1(){
    person.car.c1 = "大众"
  }
  function changC2(){
    person.car.c2 = "红旗"
  }
  function changCar(){
    person.car={c1:'雅迪',c2:'台铃'}
  }

  //监视：监视上述的多个数据
  watch([() => person.car,() =>person.name], (newValue, oldValue) => {
    console.log("发生变化",newValue, oldValue);
   },{deep:true})
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
