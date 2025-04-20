<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本数据】类型</h1>
    <h2>求和：{{ sum }}</h2>
    <button @click="changSum">+</button>
  </div>
</template>

//组合式API
<script setup lang="ts" name="PersonInfo">
    import {ref,watch} from 'vue'
    const sum = ref(0)
    function changSum(){
      sum.value+=1
    }
    //监听sum的变化，当sum发生变化时，执行回调函数
    // watch(监听的对象,回调函数0回调函数要有两个参数：新值，旧值)
    // 返回值是一个函数，调用这个函数，可以停止watch监听
    const stopWatch=watch(sum,(newValue,oldValue)=>{
      console.log('sum变化了',"新："+newValue,"旧"+oldValue)
      // 当sum的值大于10时，停止watch监听
      // stopWatch()
    if(newValue>=10){
      stopWatch()
    }
    })
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
