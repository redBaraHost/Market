import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _117b22ca = () => interopDefault(import('..\\pages\\accessoires.vue' /* webpackChunkName: "pages/accessoires" */))
const _59d19082 = () => interopDefault(import('..\\pages\\connexion.vue' /* webpackChunkName: "pages/connexion" */))
const _d032cacc = () => interopDefault(import('..\\pages\\ecouteurs.vue' /* webpackChunkName: "pages/ecouteurs" */))
const _3090599e = () => interopDefault(import('..\\pages\\montres.vue' /* webpackChunkName: "pages/montres" */))
const _24c7ed22 = () => interopDefault(import('..\\pages\\paiment.vue' /* webpackChunkName: "pages/paiment" */))
const _641642ec = () => interopDefault(import('..\\pages\\pc.vue' /* webpackChunkName: "pages/pc" */))
const _4a95197a = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _77188835 = () => interopDefault(import('..\\pages\\tablettes.vue' /* webpackChunkName: "pages/tablettes" */))
const _a5be5ef4 = () => interopDefault(import('..\\pages\\telephones.vue' /* webpackChunkName: "pages/telephones" */))
const _51b7a2ea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _40a9708f = () => interopDefault(import('..\\pages\\details\\_id.vue' /* webpackChunkName: "pages/details/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accessoires",
    component: _117b22ca,
    name: "accessoires"
  }, {
    path: "/connexion",
    component: _59d19082,
    name: "connexion"
  }, {
    path: "/ecouteurs",
    component: _d032cacc,
    name: "ecouteurs"
  }, {
    path: "/montres",
    component: _3090599e,
    name: "montres"
  }, {
    path: "/paiment",
    component: _24c7ed22,
    name: "paiment"
  }, {
    path: "/pc",
    component: _641642ec,
    name: "pc"
  }, {
    path: "/settings",
    component: _4a95197a,
    name: "settings"
  }, {
    path: "/tablettes",
    component: _77188835,
    name: "tablettes"
  }, {
    path: "/telephones",
    component: _a5be5ef4,
    name: "telephones"
  }, {
    path: "/",
    component: _51b7a2ea,
    name: "index"
  }, {
    path: "/details/:id?",
    component: _40a9708f,
    name: "details-id"
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
