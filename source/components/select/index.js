import "./component.css"

import Vue from "vue"
import helpers from "../../assets/javascripts/helpers"
import template from "./component.html"

const SensisSelect = Vue.component("sensis-select", {
  computed: {
    data() {
      return this.options.map(option => {
        return {
          text: option,
          value: helpers.parameterise(option)
        }
      })
    },
    id() {
      return helpers.identify(this.label)
    }
  },
  data() {
    return {
      selected: ""
    }
  },
  template,
  props: ["label", "options"]
})

export default SensisSelect
