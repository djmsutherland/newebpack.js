import Vue from "vue";

export default Vue.component("sui-tab", {

  template: require("../../../partials/sui-tab.html"),

  props: {
    name: { required: true },
    selected: { default: false },
    colour: { required: true }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    href() {
      return `#${this.name.toLowerCase().replace(/ /g, "-")}`;
    }
  },

  mounted() {
    this.isActive = this.selected;
  }

})
