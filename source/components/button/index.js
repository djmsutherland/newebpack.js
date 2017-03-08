import "./component.css"

import Vue from "vue"
import template from "./component.html"

const SensisButton = Vue.component("sensis-button", {
  data() {
    return {
      iconClass: `sensis-icon-${this.icon}`
    }
  },
  props: ["icon", "text"],
  template
})

export default SensisButton
