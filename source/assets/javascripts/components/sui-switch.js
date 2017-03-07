import Vue from "vue"
import store from "../services/store"
import template from "../../../partials/sui-switch.html"

export default Vue.component("sui-switch", {
  template,
  props: ["title", "description", "type", "group"],
  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`
    }
  },
  methods: {
    check() {
      switch (this.title) {
        case "never":
        case "break":
        case "unsubscribe":
          store.show.unsubscribe = true
          break
        default:
          store.show.unsubscribe = false
          break
      }
    }
  }
})
