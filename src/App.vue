<template>
  <div class="app">
    <h2 class="title">Vue路由测试：编程式路由导航</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- RouterLink组件代替传统在a标签，
        active-class="xiaozhupeiqi"：当路由匹配成功时，就会添加该类名
        to：路由地址
        第一种：to的字符串写法
        <router-link active-class="active" to="/home">主页</router-link>
        第二种：to的对象写法
        <router-link active-class="active" :to="{path:'/home'}">Home</router-link>
        <RouterLink :to="{ path: '/about' }" active-class="xiaozhupeiqi">关于</RouterLink>
       -->
      <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
      <RouterLink :to="{ name: 'xinwen' }" active-class="xiaozhupeiqi">新闻</RouterLink>
      <RouterLink :to="{ path: '/about' }" active-class="xiaozhupeiqi">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- //RouterView组件：路由视图组件，当路由匹配成功，就会渲染到该组件中 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView } from "vue-router";
</script>
<style>
/* App */
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.xiaozhupeiqi {
  background-color: #64967e;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
