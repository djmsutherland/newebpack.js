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
    this.setInitialColour()
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href === selectedTab.href
      })
      this.colourClass = `tab-${selectedTab.colour}`
    },
    setInitialColour() {
      const [active] = this.tabs.filter(tab => tab.isActive)

      this.colourClass = `tab-${active.$options.propsData.colour}`
    }
  },
  template
})

export default SensisTabs
