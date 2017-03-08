import "./component.css"

import Vue from "vue"
import template from "./component.html"

const id = component => {
  return `sui-${component.label.toLowerCase().replace(/ /g, "-")}`
}

const options = component => {
  return component.map(option => {
    return {
      text: option,
      value: option.toLowerCase().replace(/ /g, "-")
    }
  })
}

const SensisSelect = Vue.component("sensis-select", {
  computed: {
    data() {
      return options(this.options)
    },
    id() {
      return id(this)
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
