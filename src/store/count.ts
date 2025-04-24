import { defineStore } from "pinia";
//
export const useCountStore = defineStore("count", {
  // actions放置动作函数
   actions:{
    increment(value: number){
      console.log('increment被调用了',value)
      if( this.sum < 10){
        // 修改数据（this是当前的store）
        this.sum += value
      }
    }
  },
  state: () => {
    return {
      sum: 0,
      school:'atguigu',
      address:'宏福科技园'
    };
  },
  getters: {
    // 加工数据
    bigSum:state=> state.sum * 10,
    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },

});
