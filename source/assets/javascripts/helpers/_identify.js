import helpers from "./"

const identify = string => {
  return `sensis-${helpers.parameterise(string)}`
}

export default identify
