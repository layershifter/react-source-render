import copyToClipboard from "copy-to-clipboard"
import React, { Component, Fragment } from "react"
import AceEditor from "react-ace"
import { Header, Icon, Label, Segment } from "semantic-ui-react"

import "brace/mode/jsx"
import "brace/theme/github"

const code = `
import _ from 'lodash'
import React from 'react'

const babelConfig = [
  presets: [
    'env',
    'react',
  ],  
]

const imports = {
  lodash: _,
  react: React,
}

const importResolver = importName => imports[name]

const Render = ({ sourceCode }) => (
  <SourceRender
    babelConfig={babelConfig}
    onError={error => console.log(error)}
    onSuccess={error, { markup } => console.log('HTML', markup)}
    resolver={importResolver}
    source={sourceCode}
  />
)

export default Render
`

export default class Usage extends Component {
  state = {
    copied: false,
  }

  handleCopyClick = () => {
    copyToClipboard(code)

    this.setState({
      copied: true,
    })

    setTimeout(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  render() {
    const { copied } = this.state

    return (
      <Fragment>
        <Header as="h2">Example usage</Header>

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
            maxLines={50}
            mode="jsx"
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

          <Label as="a" attached="bottom right" onClick={this.handleCopyClick} size="tiny">
            {copied ? (
              <span>
                <Icon color="green" name="checkmark" /> Copied
              </span>
            ) : (
              <span>
                <Icon name="copy" /> Copy source
              </span>
            )}
          </Label>
        </Segment>
      </Fragment>
    )
  }
}
