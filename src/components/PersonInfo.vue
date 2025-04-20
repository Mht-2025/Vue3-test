<template>
  <div class="person">
    <h1>ref属性</h1>
    <h1>中国</h1>
     <!-- 为该 <h1> 元素创建了一个引用 名称为 title2
      title2算是一个容器，存储当前的DOM元素<h2>
      -->
    <h1 ref="title2">北京</h1>
    <h1>广州</h1>
    <button @click="shouH2">点击输出h2</button>
  </div>
</template>

<script setup lang="ts" name="PersonInfo">
  import {ref,defineExpose} from 'vue'
  //创建一个响应式引用
  //如果某个元素使用了 ref="title2"，
  // Vue 会在组件挂载后将该 DOM 元素赋值给 title2.value。
  const title2 =ref()
  const a = ref(0)
  const b = ref(1)
  const c = ref(2)
  function shouH2(){
    //通过 title2.value，可以访问到绑定的 DOM 元素及其属性和方法
    //title2.value 将指向 <h1> 元素
    console.log(title2.value)
  }
  //defineExpose 暴露组件的属性和方法,允许组件的父组件访问a,b,c
  defineExpose({a,b,c})
</script>
//scoped局部样式：样式只在当前组件生效
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
