import "./component.css"

import Vue from "vue"
import template from "./component.html"

const SensisButton = Vue.component("sensis-button", {
  data() {
    return {
      colourClass: `background-colour-${this.colour}`,
      iconClass: `sensis-icon-${this.icon}`
    }
  },
  props: ["colour", "icon", "text"],
  template
})

export default SensisButton
