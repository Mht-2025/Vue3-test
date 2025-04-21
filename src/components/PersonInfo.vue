<template>
  <div class="person">
   <h1>props</h1>
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="PersonInfo">
  import { type Persons} from '../types/index'
  import { defineProps , withDefaults} from 'vue';
  //接受list
  // defineProps(['list'])

  // 接受list，并限制规范
  // defineProps<{list:Persons}>()

  // 接受list + 限制规范 + 限制必要性 + 制定默认值
  // withDefaults 是 Vue 3 中的一个 API，
  // 用于为组件的 props 设置默认值
  // 默认值的规则
  // 如果 prop 的类型是对象或数组，
  // 默认值必须是一个返回该类型的函数。
  // 基本类型（如字符串、数字、布尔值）可以直接赋值。

  withDefaults(defineProps<{list?:Persons}>(),{
    //默认值注意格式，需要是一个函数，返回一个值
   list:()=> [{id:'e98219e12',name:'妹妹',age:92}]
  })

  // 接受list，并将props保存起来
  // const x=  defineProps(['list'])
  // console.log(x.list);

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
