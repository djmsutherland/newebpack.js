import "./component.css"

import Vue from "vue"
import template from "./component.html"

const SensisTab = Vue.component("sensis-tab", {
  computed: {
    href() {
      return `#${this.name.toLowerCase().replace(/ /g, "-")}`
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected
  },
  props: {
    name: { required: true },
    selected: { default: false },
    colour: { required: true }
  },
  template
})

export default SensisTab
