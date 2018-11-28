import PropTypes from "prop-types"

const FallbackRender = ({ children }) => {
  const keys = Object.keys(children).reverse()
  const found = keys.find(key => children[key] !== undefined)

  return found ? children[found] : null
}

FallbackRender.propTypes = {
  children: PropTypes.objectOf(PropTypes.element).isRequired,
}

export default FallbackRender
