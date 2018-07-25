import evalSource from "./evalSource"
import transformSource from "./transformSource"

const createElement = (babelConfig, resolver, source) =>
  evalSource(transformSource(babelConfig, source), resolver)

export default createElement
