import Vue from "vue"
import store from "../services/store"

export default Vue.component("sui-alert", {
  template: require("../../../partials/sui-alert.html"),
  data() {
    return store
  },
  props: ["title", "description"]
})
