import { defineStore } from "pinia";
//
export const useTalkStore = defineStore("lovetalk", {
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
