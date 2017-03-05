import Vue from "vue";

export default Vue.component("email-input", {

  template: require("../../../partials/email-input.html"),

  data: function() {
    return {
      active: false,
      message: ""
    }
  }

})
