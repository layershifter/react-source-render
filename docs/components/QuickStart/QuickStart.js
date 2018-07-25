import React, { Fragment } from "react"
import AceEditor from "react-ace"
import { Header, Segment } from "semantic-ui-react"

import "brace/mode/sh"
import "brace/theme/github"

const code = `$ yarn add react-source-render
# or
$ npm install react-source-render --save`

const QuickStart = () => (
  <Fragment>
    <Header as="h2">Quick Start</Header>

    <Segment
      basic
      style={{
        background: "rgb(255, 255, 255)",
        boxShadow: "rgb(204, 204, 204) 0px 1px 2px",
      }}
    >
      <AceEditor
        editorProps={{ $blockScrolling: Infinity }}
        highlightActiveLine={false}
        highlightGutterLine={false}
        maxLines={3}
        mode="sh"
        name="quick-start"
        readOnly
        showCursor={false}
        showGutter={false}
        showPrintMargin={false}
        tabSize={2}
        theme="github"
        value={code}
        width="100%"
      />
    </Segment>
  </Fragment>
)

export default QuickStart
