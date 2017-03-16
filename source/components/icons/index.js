// Icon
//
// Data behaviour: "icon"
// Data icon: string
//
// Example:
// <svg data-behaviour="icon" data-icon="logo-horizontal"></svg>

import helpers from "../../assets/javascripts/helpers"

class Icon {
  constructor(element) {
    this.element = element
    this.element.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    this.files = require.context("../../assets/images/", true, /.\.svg$/)
    this.icon = this.element.dataset.icon
    this.icons = this.svgs()
    this.generate()
  }

  svgs() {
    return helpers.webpackRequireAll(this.files).reduce((state, icon) => {
      const [name] = icon.split(".")

      return {
        ...state,
        [name]: icon
      }
    }, {})
  }

  generate() {
    Object.keys(this.icons).forEach((key, value) => {
      if (this.icon === key) {
        const id = `#${key}`
        const path = this.files.keys()[value]
        const svg = "http://www.w3.org/2000/svg"
        const xlink = "http://www.w3.org/1999/xlink"
        const use = document.createElementNS(svg, "use")

        use.setAttributeNS(xlink, "xlink:href", `${this.files(path)}${id}`)
        this.element.appendChild(use)
      }
    })
  }
}

class Icons {
  constructor(elements) {
    elements.forEach(element => {
      this[element] = new Icon(element)
    })
  }
}

const svgs = document.querySelectorAll("[data-behaviour='icon']")
const icons = new Icons(svgs)

export default icons
