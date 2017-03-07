import Vue from "vue"
import store from "../services/store"
import template from "../../../partials/sui-alert.html"

export default Vue.component("sui-alert", {
  template,
  data() {
    return store
  },
  props: ["title", "description"]
})
