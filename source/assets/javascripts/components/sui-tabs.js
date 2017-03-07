import Vue from "vue"
import template from "../../../partials/sui-tabs.html"

export default Vue.component("sui-tabs", {
  template,
  data() {
    return {
      colourClass: "",
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
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
  }
})
