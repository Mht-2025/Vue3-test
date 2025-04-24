import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
export const useTalkStore = defineStore("lovetalk", {
  actions:{
    async grtATalk(){
        // 发请求，下面这行的写法是：连续解构赋值+重命名
    const {
    // 从data中解构出content，并重命名为title
    data: {
      result: { content: title },
    },
  } = await axios.get("https://apis.tianapi.com/zhanan/index?key=5486ac63e383652e77e061f234be40d5");
  console.log(title);
  // 把请求回来的字符串，包装成一个对象
  const obj = { id: nanoid(), title };
  // 放到数组中
  this.talkList.unshift(obj);
    }
  },
  state: () => {
    return {
      talkList:[
        { id: "ftrfasdf01", title: "你别闹，真没有。" },
        { id: "ftrfasdf02", title: "喝多了乱说的我们真是单纯的" },
        { id: "ftrfasdf03", title: "那你想怎么办？我还能怎么办？" },
      ]
    };
  },

});
