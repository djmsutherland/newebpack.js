import Vue from "vue";

export default Vue.component("sui-select", {

  template: require("../../../partials/sui-select.html"),

  props: ["title", "options"],

  data: function() {
    return {
      selected: ""
    }
  },

  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`;
    },
    optionsData() {
      return this.options.map(option => {
        return {
          text: option,
          value: option.toLowerCase().replace(/ /g, "-")
        }
      });
    }
  }

})
