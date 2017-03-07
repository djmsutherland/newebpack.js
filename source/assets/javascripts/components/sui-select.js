import Vue from "vue"
import template from "../../../partials/sui-select.html"

export default Vue.component("sui-select", {
  template,
  props: ["title", "options"],
  data() {
    return {
      selected: ""
    }
  },
  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`
    },
    optionsData() {
      return this.options.map(option => {
        return {
          text: option,
          value: option.toLowerCase().replace(/ /g, "-")
        }
      })
    }
  }
})
