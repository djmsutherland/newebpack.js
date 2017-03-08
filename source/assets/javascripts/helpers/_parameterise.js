const parameterise = string => {
  return string.toLowerCase().replace(/\s/g, "-")
}

export default parameterise
