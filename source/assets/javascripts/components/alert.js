import Store from "../services/store";
import Vue from "vue";

export default Vue.component("alert", {

  template: require("../../../partials/alert.html"),

  data: function() {
    return {
      shared: Store
    }
  },

  props: ["title", "description"]
})
