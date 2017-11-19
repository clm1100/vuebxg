import Vue from 'vue'
import Router from 'vue-router'
import Loadbash from '@/components/Loadbash'
import TeacherAdd from '@/components/Teacher/TeacherAdd'
import TeacherModify from '@/components/Teacher/TeacherModify'
import CourseAdd from '@/components/Course/courseAdd'

import CategoryList from '@/components/Category/categoryList'
import CategoryAdd from '@/components/Category/categoryAdd'
import CategoryModify from '@/components/Category/categoryModify'

import TeacherList from '@/components/Teacher/TeacherList'
import Login from '@/components/Login'
import Profile from '@/components/profile/profile'
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
          path: '/course/list',
          component: TeacherAdd
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
    console.log(!VueCookie.get('PHPSESSID'))
    if (!VueCookie.get('PHPSESSID')) {
      return next('/login')
    }
  }
  next()
})
export default router
