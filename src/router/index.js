import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PluginsDemo from '@/views/PluginsDemo.vue'
import StoreDemo from '@/views/StoreDemo.vue'
import Layout from '@/views/layout/Layout.vue'
import Plugins from '@/views/Plugins.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        alias: '首页',
        icon: 'el-icon-s-home',
        component: Home
      }, {
        path: '/plugins',
        name: 'Plugins',
        alias: '插件',
        icon: 'el-icon-paperclip',
        component: Plugins,
        children: [
          {
            path: 'PluginsDemo',
            name: 'PluginsDemo',
            alias: '插件示例',
            icon: 'el-icon-s-data',
            component: PluginsDemo
          }, {
            path: 'test',
            name: 'test',
            alias: '测试页面',
            icon: 'el-icon-s-data',
            component: () => import ('../views/Test.vue')
          }


        ]
      }, {
        path: '/directive',
        name: 'DirectiveDemo',
        alias: '指令',
        icon: 'el-icon-star-on',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import ( /* webpackChunkName: "about" */
            '../views/DirectiveDemo.vue')
      }, {
        path: '/store',
        name: 'StoreDemo',
        alias: '状态管理',
        icon: 'el-icon-user-solid',
        component: StoreDemo
      }
    ]
  },]

const router = new VueRouter({mode: 'history', base: process.env.BASE_URL, routes})

export default router
