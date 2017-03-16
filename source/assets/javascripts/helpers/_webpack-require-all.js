const webpackRequireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}

export default webpackRequireAll
