import Vue from "vue";

export default Vue.component("sui-tabs", {

  template: require("../../../partials/sui-tabs.html"),

  data() {
    return {
      colourClass: "",
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    this.setInitialColour();
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href === selectedTab.href;
      });
      this.colourClass = `tab-${selectedTab.colour}`;
    },
    setInitialColour() {
      this.colourClass = `tab-${this.tabs.filter(tab => tab.isActive)[0].$options.propsData.colour}`;
    }
  }

})
