import "../stylesheets/index.css"

// Components
import "../../components/button"
import "../../components/flash"
import "../../components/icons"
import "../../components/input"
import "../../components/select"
import "../../components/switch"
import "../../components/tab"
import "../../components/tabs"
import "../../components/toggle"

import Vue from "vue"
import store from "./services/store"
import svg4everybody from "svg4everybody"

const application = () => {
  return new Vue({
    el: "#sensis-application",
    data: store
  })
}

application()

document.addEventListener("DOMContentLoaded", () => {
  // Load svgs everywhere
  svg4everybody({
    nosvg: true,
    polyfill: true
  })

  // Transition the loading screen after the application has loaded
  document.getElementById("sensis-loader").className = "fadeout"
  document.getElementById("sensis-application").className += " fadein"
})
