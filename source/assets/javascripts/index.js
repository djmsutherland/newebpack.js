import "../stylesheets/index.css"

// Components
import "./components/sui-alert";
import "./components/sui-switch";
import "./components/sui-input";

import Store from "./services/store";
import Vue from "vue";


// Vue initialisation
new Vue({

  el: "#sui-app",

  data: {
    shared: Store
  }

});
