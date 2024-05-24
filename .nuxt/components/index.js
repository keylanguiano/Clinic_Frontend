export { default as UiUserAlert } from '../../components/ui/UserAlert.vue'
export { default as UiUserDoctor } from '../../components/ui/UserDoctor.vue'
export { default as UiUserLogin } from '../../components/ui/UserLogin.vue'
export { default as UiUserMedicine } from '../../components/ui/UserMedicine.vue'
export { default as UiUserPrescription } from '../../components/ui/UserPrescription.vue'
export { default as UiUserProgressCircular } from '../../components/ui/UserProgressCircular.vue'
export { default as UiUserSchedule } from '../../components/ui/UserSchedule.vue'
export { default as UiUserSearch } from '../../components/ui/UserSearch.vue'
export { default as UiUserUpdate } from '../../components/ui/UserUpdate.vue'

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
