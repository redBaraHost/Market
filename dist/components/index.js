export { default as Affiche1Vue } from '../..\\components\\affiche1Vue.vue'
export { default as Affiche2Vue } from '../..\\components\\affiche2Vue.vue'
export { default as Affiche3Vue } from '../..\\components\\affiche3Vue.vue'
export { default as Affiche4Vue } from '../..\\components\\affiche4Vue.vue'
export { default as Affiche5Vue } from '../..\\components\\affiche5Vue.vue'
export { default as FooterVue } from '../..\\components\\footerVue.vue'
export { default as MenuVue } from '../..\\components\\menuVue.vue'
export { default as PanierVue } from '../..\\components\\panierVue.vue'
export { default as SearchVue } from '../..\\components\\searchVue.vue'
export { default as SliderMontreVue } from '../..\\components\\sliderMontreVue.vue'
export { default as SliderPcVue } from '../..\\components\\sliderPcVue.vue'
export { default as SliderTelVue } from '../..\\components\\sliderTelVue.vue'
export { default as SliderVue } from '../..\\components\\sliderVue.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
