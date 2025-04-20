<template>
    <Personinfo/>
</template>
<!--
在 <script setup> 中，
 通过 import PersonInfo from './components/PersonInfo.vue' 引入了 PersonInfo 组件。
使用 <PersonInfo /> 标签将该组件嵌套到当前组件（App.vue）的模板中
-->
<script lang="ts" setup name="App">
  import Personinfo from './components/PersonInfo.vue'
</script>

<style>

</style>
