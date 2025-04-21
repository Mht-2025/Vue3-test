// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter ,createWebHistory} from "vue-router";
// 引入一个一个可能要呈现的组件
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";

// 第二部 ：创建路由器
const router = createRouter({
  history:createWebHistory(),//路由器的工作模式
  // 管理的路由
  routes:[//一个一个的路由规则
    {
      // path:'路径',
      // component: 对应的具体组件
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    }
  ]
})

export default router;
