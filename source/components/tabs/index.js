import "./component.css"

import Vue from "vue"
import template from "./component.html"

const SensisTabs = Vue.component("sensis-tabs", {
  created() {
    this.tabs = this.$children
  },
  data() {
    return {
      colourClass: "",
      tabs: []
    }
  },
  mounted() {
    this.colourise()
  },
  methods: {
    colourise() {
      const [active] = this.tabs.filter(tab => tab.active)

      this.colourClass = `tab-${active.$options.propsData.colour}`
    },
    select(tab) {
      this.tabs.forEach(item => {
        item.active = item.href === tab.href
      })
      this.colourClass = `tab-${tab.colour}`
    }
  },
  template
})

export default SensisTabs
