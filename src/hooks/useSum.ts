  import {onMounted, ref ,computed} from "vue";

  export default function useSum() {
    const sum = ref(0);
  function add() {
    sum.value += 1;
  }
  // 计算属性
  const bigSum = computed(() => sum.value * 20);
  // 钩子
  onMounted(() => {
    add()
  });

  return {sum,add,bigSum}
  }
