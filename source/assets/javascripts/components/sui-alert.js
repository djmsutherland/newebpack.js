import Store from "../services/store";
import Vue from "vue";

export default Vue.component("sui-alert", {

  template: require("../../../partials/sui-alert.html"),

  data: function() {
    return {
      shared: Store
    }
  },

  props: ["title", "description"]
})
