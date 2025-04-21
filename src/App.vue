<template>
    <PersonInfo :list="persons" />
</template>
<!--
在 <script setup> 中，
 通过 import PersonInfo from './components/PersonInfo.vue' 引入了 PersonInfo 组件。
使用 <PersonInfo /> 标签将该组件嵌套到当前组件（App.vue）的模板中
-->
<script lang="ts" setup name="App">
  import PersonInfo from './components/PersonInfo.vue'
  import { type Persons} from './types/index'
  import {reactive} from 'vue'
  const persons = reactive<Persons>([
     {id:'e98219e12',name:'张三',age:18},
      {id:'e98219e13',name:'李四',age:19},
       {id:'e98219e14',name:'王五',age:20}
     ])
</script>

<style>

</style>
