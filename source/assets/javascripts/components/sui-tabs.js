import Vue from "vue";

export default Vue.component("sui-tabs", {

  template: require("../../../partials/sui-tabs.html"),

  data() {
    return {
      colourClass: "tab-orange",
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href === selectedTab.href;
      });
      this.colourClass = `tab-${selectedTab.colour}`;
    }
  }

})
