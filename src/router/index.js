import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 模板页面
const templatePage = () => Promise.resolve(require('@/components/templatePage'))

// 首页
const home = () => Promise.resolve(require('@/view/home'))

// 学校管理
const schoolManage = () => Promise.resolve(require('@/view/school/schoolManage'))

const test = () => Promise.resolve(require('@/view/test'))

// 多次点击同一路由时，执行catch，避免报错。
const routerPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: templatePage,
      children: [
        {
          path: '/home',
          component: home,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/schoolManage',
          component: schoolManage,
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/test',
          component: test,
          meta: {
            title: '图表'
          }
        }
      ]
    }
  ]
})
