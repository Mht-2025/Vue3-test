<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>

    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>

  </div>
</template>
<!--
笔记
安装插件 npm i vite-plugin-vue-setup-extend -D
安装后在vite.config.ts中引入：import VueSetupExtend from 'vite-plugin-vue-setup-extend' 并调用
在script setup中配置name
作用：减少代码量，写一个script标签即可
-->


//配置组件名称
<!-- <script lang="ts">
  export default {
    name:'Person-info11',
  }
</script> -->
//组合式API
<script setup lang="ts" name="Person">
import {ref} from 'vue'
  //变量
      const name = ref('张三')//此时的name是响应式数据
      const age = ref(18)//此时age是响应式数据
      const tel = '13888888888'

      //方法
      function changeName (){
        name.value = 'zhang-san'//页面没有变化，但是代码执行成功了
        console.log(name.value);
      }
      function changeAge (){
        age.value += 1
        console.log(age.value);

      }
      function showTel (){
        alert(tel)
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
