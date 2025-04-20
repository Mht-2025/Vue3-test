<template>
  <div class="person">
    <h2>一辆{{car.brand}}车价值{{car.price}}万</h2>
    <button @click="changePrice">点击修改汽车价格</button>
    <hr>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeGame">修改第一个游戏的名字</button>

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
<script setup lang="ts" name="Person">
    import { reactive, ref } from 'vue';

    // 数据
    const car =ref({brand:'奔驰',price:1000})
    const games = ref(
      [
        {id:'edfhgfjgj',name:'王者荣耀'},
        {id:'shghsghfgh',name:'原神'},
        {id:'shgshshfg',name:'吃鸡'},
      ]
    )
    function changePrice() {
      car.value.price += 100
      console.log(car.value.price);
    }
    function changeGame() {
      games.value[0].name = '和平精英'
      console.log(games.value[0].name);
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
