<template>
  <div class="app">
    <h2 ref="title2">你好</h2>
    <button @click="test">点我输出你好</button>
    <Personinfo ref="ren"/>
  </div>
</template>
<!--
在 <script setup> 中，
 通过 import PersonInfo from './components/PersonInfo.vue' 引入了 PersonInfo 组件。
使用 <PersonInfo /> 标签将该组件嵌套到当前组件（App.vue）的模板中
-->
<script lang="ts" setup name="App">
  import Personinfo from './components/PersonInfo.vue'
  import { ref } from 'vue'
  const title2 = ref()
  const ren = ref()
  function test(){
    console.log(title2.value);
    console.log(ren.value);

  }
</script>

<style>

</style>
