import React from "react"
import universal from "react-universal-component"
import { Loader } from "semantic-ui-react"

import isBrowser from "../../lib/isBrowser"

export default (isBrowser
  ? universal(import("./Sandbox"), {
      loading: () => <Loader active inline="centered" />,
    })
  : () => null)
