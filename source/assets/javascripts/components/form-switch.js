import Vue from "vue";

export default Vue.component("form-switch", {

  template: require("../../../partials/form-switch.html"),

  props: ["title", "description", "type", "group"]
})
