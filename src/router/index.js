import Vue from 'vue'
import Router from 'vue-router'

// 登陆，个人页面，控制台页面相关组件
import Loadbash from '@/components/Loadbash'
import Login from '@/components/Login'
import Profile from '@/components/profile/profile'

// 老师页面相关组件
import TeacherList from '@/components/Teacher/TeacherList'
import TeacherAdd from '@/components/Teacher/TeacherAdd'
import TeacherModify from '@/components/Teacher/TeacherModify'

// 课程页面相关组件
import CourseAdd from '@/components/Course/courseAdd'
import CourseStep1 from '@/components/Course/courseStep1'
import CourseStep2 from '@/components/Course/courseStep2'
import CourseStep3 from '@/components/Course/courseStep3'
import CourseList from '@/components/Course/courseList'

// 种类页面相关组件
import CategoryList from '@/components/Category/categoryList'
import CategoryAdd from '@/components/Category/categoryAdd'
import CategoryModify from '@/components/Category/categoryModify'

// 测试组件
import Test from '@/test/test'

var VueCookie = require('vue-cookie')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Loadbash,
      children: [
        { path: '', component: TeacherList },
        {
          path: '/index',
          component: TeacherList
        },
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/teacher',
          redirect: '/teacher/list'
        },
        {
          path: '/teacher/list',
          component: TeacherList
        },
        {
          path: '/teacher/list/:id',
          name: 'TeacherModify',
          component: TeacherModify
        },
        {
          path: '/teacher/add',
          component: TeacherAdd
        },
        {
          path: '/course/add',
          component: CourseAdd
        },
        {
          path: '/course/add/step1/:id',
          component: CourseStep1
        },
        {
          path: '/course/add/step2/:id',
          component: CourseStep2
        },
        {
          path: '/course/add/step3/:id',
          component: CourseStep3
        },
        {
          path: '/course/list',
          component: CourseList
        },
        {
          path: '/category',
          redirect: '/category/list'
        },
        {
          path: '/category/add',
          component: CategoryAdd
        },
        {
          path: '/category/list',
          component: CategoryList
        },
        {
          path: '/category/list/:id',
          component: CategoryModify
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  // ...
  if (to.path !== '/login') {
    // console.log(!VueCookie.get('PHPSESSID'))
    if (!VueCookie.get('PHPSESSID')) {
      return next('/login')
    }
  }
  next()
})
export default router
