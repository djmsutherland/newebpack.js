import "../stylesheets/index.css"

// Components
import "../../components/button"
import "../../components/flash"
import "../../components/input"
import "../../components/select"
import "../../components/switch"
import "../../components/tab"
import "../../components/tabs"
import "../../components/toggle"

import Vue from "vue"
import store from "./services/store"

const application = () => {
  return new Vue({
    el: "#sensis-application",
    data: store
  })
}

application()

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sensis-loader").className = "fadeout"
  document.getElementById("sensis-application").className += " fadein"
})
