import "./component.css"

import Vue from "vue"
import helpers from "../../assets/javascripts/helpers"
import template from "./component.html"

const SensisTab = Vue.component("sensis-tab", {
  computed: {
    href() {
      return `#${helpers.parameterise(this.name)}`
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
