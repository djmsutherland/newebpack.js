import "./component.css"

import Vue from "vue"
import bus from "../../assets/javascripts/services/bus"
import helpers from "../../assets/javascripts/helpers"
import store from "../../assets/javascripts/services/store"
import template from "./component.html"

const SensisSwitch = Vue.component("sensis-switch", {
  computed: {
    id() {
      return helpers.identify(this.label)
    }
  },
  data() {
    return store
  },
  methods: {
    action() {
      bus.$emit("toggle-component", {
        group: this.group,
        toggle: this.toggle,
        type: this.type
      })
    }
  },
  props: ["group", "label", "toggle", "type"],
  template
})

export default SensisSwitch
