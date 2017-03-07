import "../stylesheets/index.css"

// Components
import "./components/sui-alert"
import "./components/sui-input"
import "./components/sui-select"
import "./components/sui-submit-button"
import "./components/sui-switch"
import "./components/sui-tab"
import "./components/sui-tabs"

import Vue from "vue"

import store from "./services/store"

// Vue initialisation
new Vue({
  el: "#sui-application",
  data: store
})
