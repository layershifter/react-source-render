import PropTypes from "prop-types"
import { renderToStaticMarkup } from "react-dom/server"

/**
 * Creates a React element from the passed source code and config.
 */
const ElementFromSource = (props) => {
  const { active, children, element } = props

  return children(active ? renderToStaticMarkup(element) : '')
}

ElementFromSource.propTypes = {
  /**
   * An option that controls rendering of HTML with ReactDOM server, it allows to omit
   * rendering when you're using portals.
   */
  active: PropTypes.bool.isRequired,

  /** A render function. */
  children: PropTypes.func.isRequired,

  /** An element to render. */
  element: PropTypes.element.isRequired,
}

export default ElementFromSource
