import Vue from "vue"
import template from "../../../partials/sui-tab.html"

export default Vue.component("sui-tab", {
  template,
  props: {
    name: { required: true },
    selected: { default: false },
    colour: { required: true }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    href() {
      return `#${this.name.toLowerCase().replace(/ /g, "-")}`
    }
  },
  mounted() {
    this.isActive = this.selected
  }
})
