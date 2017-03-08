import "./component.css"

import Vue from "vue"
import template from "./component.html"

const SensisInput = Vue.component("sensis-input", {
  data() {
    return {
      value: ""
    }
  },
  computed: {
    id() {
      return `sui-${this.label.toLowerCase().replace(/ /g, "-")}`
    }
  },
  props: ["label", "type"],
  template
})

export default SensisInput
