<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>性别：{{person.gender}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeGender">修改性别</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
import { reactive,toRef,toRefs } from 'vue'
  //数据
  const person = reactive({
    name: '张三',
    age: 18,
    gender: '男'
  })
  // 解构 const {name,age,gender} = person相当于
  // const name = person.name
  // const age = person.age
  // const gender = person.gender
  // 以上定义的（也就是结构出来的）的name,age,gender均不是响应式的
  // toRefs方法可以将person对象中的属性转换为响应式的ref对象
  // const {name,age,gender} = toRefs(person)
  // 加上toRefs方法后，name,age,gender都是响应式的
  // 相当于 const name = ref(person.name)
  // toRef方法可以将person对象中的属性转换为响应式的ref对象
  // toRef则是取出单个的转换并且的响应式数据，toRefs则将person对象中的所有属性转换为响应式的ref对象
  const {name,age} = toRefs(person)
  const gd = toRef(person,'gender')
  // 方法
  const changeName = () => {
    name.value = '李四'
  }

  const changeAge = () => {
    age.value += 2
  }

  const changeGender = () => {
    gd.value = '女'
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
