<template>
  <div class="person">
    <h1>watchEffect</h1>
    <h2 id="demo">水温：{{ temp }} °0</h2>
    <h2>水位：{{ height }}cm</h2>
    <button @click="changTemp">水温+10</button>
    <button @click="changHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="PersonInfo">
    import { ref,watch, watchEffect } from 'vue';
    const temp = ref(0);
    const height = ref(0);
    function changTemp() {
      temp.value += 10;
    }
    function changHeight() {
      height.value += 10;
    }
    // watchEffect(() => {
    //   if (temp.value > 50 ) {
    //     alert('水温过高');
    //   }
    // });
    // watchEffect(() => {
    //   if (height.value > 40 ) {
    //     alert('水位过高');
    //   }
    // })

    // 用watch实现，需要明确的指出要监视：temp、height
   watch([temp,height],(value)=>{
    // 从value中获取最新的temp值、height值
    const [newTemp,newHeight] = value
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if(newTemp >= 50 || newHeight >= 20){
      console.log('联系服务器')
    }
  })

    // 用watchEffect实现，不用
    const stopWtach = watchEffect(() => {
      // 室温达到50℃，或水位达到20cm，立刻联系服务器
      if (height.value > 40 || temp.value > 50 ) {
        console.log('水位过高或水温过高,停止监视');
        // 停止监视
        stopWtach();
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
