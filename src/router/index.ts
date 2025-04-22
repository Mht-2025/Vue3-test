// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter ,createWebHistory} from "vue-router";
// 引入一个一个可能要呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";

// 第二部 ：创建路由器
const router = createRouter({
  history:createWebHistory(),//路由器的工作模式
  // 管理的路由
  routes:[//一个一个的路由规则
    {
      // 路由名称
      // path:'路径',
      // component: 对应的具体组件
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xinwenxiangqing',
          // 子集路由路径不用带/
          path:'detail',
          component:Detail,
        }
      ]
    },

    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]
})
// 暴露出去
export default router;
