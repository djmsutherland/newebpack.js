import "./component.css"

import Vue from "vue"
import store from "../../assets/javascripts/services/store"
import template from "./component.html"

const SensisFlash = Vue.component("sensis-flash", {
  data() {
    return store
  },
  methods: {
    remove() {
      this.show.flash = !this.show.flash
    }
  },
  props: ["title", "message"],
  template
})

export default SensisFlash
