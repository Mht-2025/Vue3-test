<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象数据】类型</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">点击修改名字</button>
    <button @click="changAge">点击修改年龄</button>
    <button @click="changPerson">修改整个人</button>
    <hr>
    <h2>测试：{{ sum.a.b.c }}</h2>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
import {reactive,watch} from 'vue'
    //数据
    const person = reactive({
      name:'张三',
      age:18
    })
    const sum ={
      a:{
        b:{
          c:999
        }
      }
    }
    console.log(sum);

    //监视
    watch(person,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    })
    function changName(){
      person.name += '~~'
    }
    function changAge(){
      person.age += 1
    }
    function changPerson(){
      Object.assign(person,{name:'李四',age:20})
    }
    // 监视，情况三：监视【reactive】定义的【对象类型】数据，
    // 且默认是开启深度监视的
    watch(person,(newValue,oldValue)=>{
      console.log("person变化了",newValue,oldValue);
    })



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
