<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象数据】类型</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">点击修改名字</button>
    <button @click="changAge">点击修改年龄</button>
    <button @click="changPerson">修改整个人</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
    import {ref,watch} from 'vue'
    //数据
    const person = ref({
      name:'张三',
      age:18
    })
    //监视
    watch(person,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    })
    function changName(){
      person.value.name += '~~'
    }
    function changAge(){
      person.value.age += 1
    }
    function changPerson(){
      person.value = {
        name:'李四',
        age:20
      }

    }
    /*
    监听 情况二：监视【ref】定义的【对象数据】类型
    监视的是对象的地址值，若想监视对象内部属性的变化，
    需要手动开启深度监视 ，即配置对象中的deep为true
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....）
    immediate 配置项：默认是false，立即执行回调函数，
    如果配置为true，则立即执行回调函数，并监视变化
    */
    watch(person,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
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
