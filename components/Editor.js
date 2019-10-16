import * as exenv from "exenv"
import React from "react"

// eslint-disable-next-line import/no-mutable-exports
let Editor = () => null

if (exenv.canUseDOM) {
  const AceEditor = require("react-ace")

  require("brace/mode/html")
  require("brace/mode/jsx")
  require("brace/mode/sh")
  require("brace/theme/github")

  Editor = props => {
    React.useEffect(() => {
      console.log("MOUNT")
    }, [])

    return React.createElement(AceEditor.default, props)
  }
}

export default Editor
