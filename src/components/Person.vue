<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>

    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>

  </div>
</template>

<script lang="ts">
  export default {
    name:'Person-info',
    setup(){
     //变量
      let name = '张三' //此时的name不是响应式数据
      let age = 19//此时age不是响应式数据
      const tel = '13888888888'

      //方法
      function changeName (){
        name = 'zhang-san'//页面没有变化，但是代码执行成功了
        console.log(name);
      }
      function changeAge (){
        age += 1
        console.log(age);

      }
      function showTel (){
        alert(tel)
      }
      return {
        name,
        age,
        tel,
        changeName,
        changeAge,
        showTel
      }
      //return ()=>"haha" //箭头函数，srtup不能用this，所以可以直接简写，页面直接渲染返回内容
    }
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
