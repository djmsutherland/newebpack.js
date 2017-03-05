import "../stylesheets/index.css"
import "./_sui-input"

// Components
import "./components/alert";
import "./components/form-switch";
import "./components/email-input";

import Store from "./services/store";
import Vue from "vue";


// Vue initialisation
new Vue({

  el: "#sui-app",

  data: {
    shared: Store
  }

});
