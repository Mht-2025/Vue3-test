<template>
  <div class="person">
    <h1>情况四：监视ref或reactive定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>第一台车：{{ person.car.c1 }}</h2>
    <h2>第二台车：{{ person.car.c2 }}</h2>
    <button @click="changName">点击修改姓名</button>
    <button @click="changAge">点击修改年龄</button>
    <button @click="changC1">点击修改第一台车</button>
    <button @click="changC2">点击修改</button>
    <button @click="changCar">点击修改</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
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
   // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  /* watch(()=> person.name,(newValue,oldValue)=>{
    console.log('person.name变化了',newValue,oldValue)
  }) */

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数

  watch(() => person.name, (newValue, oldValue) => {
    console.log("变拉"+newValue, oldValue);
  })
  // watch(person.car, (newValue, oldValue) => {
  //   console.log("变拉"+newValue, oldValue);
  // })
  watch(() => person.car, (newValue, oldValue) => {
    console.log("变拉"+newValue, oldValue);
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
