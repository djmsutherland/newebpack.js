import "./component.css"

import Vue from "vue"
import helpers from "../../assets/javascripts/helpers"
import template from "./component.html"

const SensisInput = Vue.component("sensis-input", {
  data() {
    return {
      value: ""
    }
  },
  computed: {
    id() {
      return helpers.identify(this.label)
    }
  },
  props: ["label", "type"],
  template
})

export default SensisInput
