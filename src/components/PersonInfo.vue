<template>
  <div class="person">
    <h2>一辆{{car.brand}}车,价值{{car.price}}万</h2>
    <button @click="changePrice">点击修改汽车价格</button>
    <button @click="changeBrand">点击修改汽车品牌</button>
    <button @click="changeCar">点击修改汽车</button>
  </div>
</template>
<!--
笔记
安装插件 npm i vite-plugin-vue-setup-extend -D
安装后在vite.config.ts中引入：import VueSetupExtend from 'vite-plugin-vue-setup-extend' 并调用
在script setup中配置name
作用：减少代码量，写一个script标签即可
ref 创建：对象类型的响应式数据
- 其实ref接收的数据可以是：基本类型、对象类型。
- 若ref接收的是对象类型，内部其实也是调用了reactive函数。

-->

//组合式API
<script setup lang="ts" name="PersonInfo">
    import { reactive, ref } from 'vue';

    // 数据
    const car =reactive({brand:'奔驰',price:1000})
    function changePrice() {
      car.price += 100
      console.log(car.price);
    }
    function changeBrand(){
      car.brand = '宝马'
    }
    function changeCar(){
      // 用ref定义响应式数据，可以直接修改对象的值
      // car.value = {brand:'保时捷',price:2000}
      // 用reactive定义响应式数据，不可以直接修改整个对象对象
      // 需要用到Object.assing方法，因为reactive返回的是一个对象，不能直接修改
      //Object.assign 是一个用于合并对象的内置方法，它可以将一个或多个源对象的属性复制到目标对象上，并返回目标对象
      Object.assign(car,{brand:'保时捷',price:20})

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
