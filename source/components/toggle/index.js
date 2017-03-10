import "./component.css"

import Vue from "vue"
import bus from "../../assets/javascripts/services/bus"
import template from "./component.html"

const SensisToggle = Vue.component("sensis-toggle", {
  created() {
    bus.$on("toggle-component", this.toggle)
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle(data) {
      if (data.handle === this.handle) {
        this.active = true

        return
      }
      if (data.group === this.group) {
        this.active = false
      }
    }
  },
  props: {
    handle: {
      required: true
    },
    group: {
      required: false
    }
  },
  template
})

export default SensisToggle
