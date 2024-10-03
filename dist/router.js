import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _255c6f7d = () => interopDefault(import('..\\pages\\accessoires.vue' /* webpackChunkName: "pages/accessoires" */))
const _b24b3c38 = () => interopDefault(import('..\\pages\\connexion.vue' /* webpackChunkName: "pages/connexion" */))
const _36212808 = () => interopDefault(import('..\\pages\\ecouteurs.vue' /* webpackChunkName: "pages/ecouteurs" */))
const _0a299513 = () => interopDefault(import('..\\pages\\montres.vue' /* webpackChunkName: "pages/montres" */))
const _100dcb51 = () => interopDefault(import('..\\pages\\paiment.vue' /* webpackChunkName: "pages/paiment" */))
const _0545f768 = () => interopDefault(import('..\\pages\\pc.vue' /* webpackChunkName: "pages/pc" */))
const _765b93d8 = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _77bd4cd2 = () => interopDefault(import('..\\pages\\tablettes.vue' /* webpackChunkName: "pages/tablettes" */))
const _01322b64 = () => interopDefault(import('..\\pages\\telephones.vue' /* webpackChunkName: "pages/telephones" */))
const _1d8100ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5460e826 = () => interopDefault(import('..\\pages\\details\\_id.vue' /* webpackChunkName: "pages/details/_id" */))

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
    component: _255c6f7d,
    name: "accessoires"
  }, {
    path: "/connexion",
    component: _b24b3c38,
    name: "connexion"
  }, {
    path: "/ecouteurs",
    component: _36212808,
    name: "ecouteurs"
  }, {
    path: "/montres",
    component: _0a299513,
    name: "montres"
  }, {
    path: "/paiment",
    component: _100dcb51,
    name: "paiment"
  }, {
    path: "/pc",
    component: _0545f768,
    name: "pc"
  }, {
    path: "/settings",
    component: _765b93d8,
    name: "settings"
  }, {
    path: "/tablettes",
    component: _77bd4cd2,
    name: "tablettes"
  }, {
    path: "/telephones",
    component: _01322b64,
    name: "telephones"
  }, {
    path: "/",
    component: _1d8100ed,
    name: "index"
  }, {
    path: "/details/:id?",
    component: _5460e826,
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
