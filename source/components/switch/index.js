import "./component.css"

import Vue from "vue"
import store from "../../assets/javascripts/services/store"
import template from "./component.html"

const SensisSwitch = Vue.component("sensis-switch", {
  computed: {
    id() {
      return `sensis-${this.label.toLowerCase().replace(/ /g, "-")}`
    }
  },
  data() {
    return store
  },
  methods: {
    action() {
      if (this.toggle) {
        store.show[this.toggle] = true
      }
    }
  },
  props: ["group", "label", "toggle", "type"],
  template
})

export default SensisSwitch
