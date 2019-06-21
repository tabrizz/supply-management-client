import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import CreateProduct from './views/Products/Create.vue'
import IndexProduct from './views/Products/Index.vue'

import IndexRequirement from './views/Requirements/Index.vue'
import CreateRequirement from './views/Requirements/Create.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/logistics',
    component: DefaultLayout,
    children: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      {
        path: 'products',
        name: 'products',
        component: IndexProduct
      },
      {
        path: "produtcs/create",
        name: "products-create",
        component: CreateProduct
      },
      {
        path: "requirements",
        name: "requirements",
        component: IndexRequirement
      },
      {
        path: "requirements/create",
        name: "requirements-create",
        component: CreateRequirement
      }

    ]
  }, {
    path: "/login",
    name: "login",
    component: Login
  }]
})