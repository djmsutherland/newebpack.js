class SuiInput {
  constructor(element) {
    this.element = element
    this.element.addEventListener("keyup", () => {
      if (this.element.value.length) {
        this.element.nextElementSibling.classList.add("active")
      } else {
        this.element.nextElementSibling.classList.remove("active")
      }
    })
  }
}

const [input] = document.querySelectorAll("[data-behaviour='sui-input']")
const suiInput = new SuiInput(input)

export default suiInput
