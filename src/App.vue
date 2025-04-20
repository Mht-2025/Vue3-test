<template>
  <div class="app">
    <PersonInfo/>
  </div>
</template>

<script lang="ts">
  import PersonInfo from './components/PersonInfo.vue'
  export default {
    name:'App', //组件名
    components:{PersonInfo} //注册组件
  }
</script>

<style>

</style>
