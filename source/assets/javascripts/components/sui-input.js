import Vue from "vue"
import template from "../../../partials/sui-input.html"

export default Vue.component("sui-input", {
  template,
  props: ["title", "type"],
  data() {
    return {
      message: ""
    }
  },
  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`
    }
  }
})
