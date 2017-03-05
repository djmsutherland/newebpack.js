import Vue from "vue";

export default Vue.component("sui-input", {

  template: require("../../../partials/sui-input.html"),

  props: ["title", "type"],

  data: function() {
    return {
      message: ""
    }
  },

  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`;
    }
  }

})
