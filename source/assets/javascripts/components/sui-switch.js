import Vue from "vue";

export default Vue.component("sui-switch", {

  template: require("../../../partials/sui-switch.html"),

  props: ["title", "description", "type", "group"],

  computed: {
    id() {
      return `sui-${this.title.toLowerCase().replace(/ /g, "-")}`;
    }
  }

})
