import "../stylesheets/index.css"

// Components
import "./components/sui-alert";
import "./components/sui-input";
import "./components/sui-select";
import "./components/sui-submit-button";
import "./components/sui-switch";
import "./components/sui-tab";
import "./components/sui-tabs";

import Store from "./services/store";
import Vue from "vue";


// Vue initialisation
new Vue({

  el: "#sui-app",

  data: {
    shared: Store
  }

});
