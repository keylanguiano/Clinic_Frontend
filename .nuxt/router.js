import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e2914db = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _5166a73c = () => interopDefault(import('../pages/laboratory/index.vue' /* webpackChunkName: "pages/laboratory/index" */))
const _09069314 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _388a01fd = () => interopDefault(import('../pages/patients/index.vue' /* webpackChunkName: "pages/patients/index" */))
const _6ef7c746 = () => interopDefault(import('../pages/schedule/index.vue' /* webpackChunkName: "pages/schedule/index" */))
const _a1a6d4d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _6e2914db,
    name: "dashboard"
  }, {
    path: "/laboratory",
    component: _5166a73c,
    name: "laboratory"
  }, {
    path: "/orders",
    component: _09069314,
    name: "orders"
  }, {
    path: "/patients",
    component: _388a01fd,
    name: "patients"
  }, {
    path: "/schedule",
    component: _6ef7c746,
    name: "schedule"
  }, {
    path: "/",
    component: _a1a6d4d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
