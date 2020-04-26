import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import Home from '@/components/Home'
import OperationLog from '@/components/Background/OperationLog'
import OutOfTime from '@/components/Background/OutOfTime'
import TaskManagement from '@/components/CallManagement/TaskManagement'
import TaskAnalysis from '@/components/DataAnalysis/TaskAnalysis'
import UsersList from '@/components/OrganizationAndManagement/UsersList'
import test from '@/components/test'
import asingleadd from '@/components/OrganizationAndManagement/bypassaccount/Asingleadd'
import batchadd from '@/components/OrganizationAndManagement/bypassaccount/batchadd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requireAuth: true}
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {requireAuth: true}
    },
    {
      path: '/OperationLog',
      name: 'OperationLog',
      component: OperationLog,
      meta: {requireAuth: true}
    },
    {
      path: '/OutOfTime',
      name: 'OutOfTime',
      component: OutOfTime,
      meta: {requireAuth: true}
    },
    {
      path: '/TaskManagement',
      name: 'TaskManagement',
      component: TaskManagement,
      meta: {requireAuth: true}
    },
    {
      path: '/TaskAnalysis',
      name: 'TaskAnalysis',
      component: TaskAnalysis,
      meta: {requireAuth: true}
    },
    {
      path: '/UsersList',
      name: 'UsersList',
      component: UsersList,
      meta: {requireAuth: true}
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/asingleadd',
      name: 'asingleadd',
      component: asingleadd
    },
    {
      path: '/batchadd',
      name: 'batchadd',
      component: batchadd
    }
  ]
})
