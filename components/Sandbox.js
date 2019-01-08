import { Grid, Header, Icon, Label, Message, Segment } from "semantic-ui-react"
import React, { Component, Fragment } from "react"
import SourceRender from "react-source-render"

import Editor from "./Editor"

const imports = {
  react: React,
}

const resolver = path => imports[path]

export default class Sandbox extends Component {
  state = {
    source: `import React from "react";

const Example = () => <div>Hello world!</div>;
 
export default Example
`,
  }

  handleSourceChange = source => {
    this.setState({ source })
  }

  render() {
    const { source } = this.state

    return (
      <Fragment>
        <Header as="h2">Live sandbox</Header>

        <SourceRender resolver={resolver} source={source}>
          <Segment
            basic
            attached="top"
            style={{
              background: "rgb(255, 255, 255)",
              boxShadow: "rgb(204, 204, 204) 0px 1px 2px",
            }}
          >
            <Grid columns={2} divided>
              <Grid.Column>
                <Label attached="top left" color="teal" size="tiny">
                  Preview
                </Label>
                <SourceRender.Consumer>{({ element }) => element}</SourceRender.Consumer>
              </Grid.Column>
              <Grid.Column>
                <Label attached="top right" color="teal" size="tiny">
                  Rendered HTML
                </Label>

                <SourceRender.Consumer>
                  {({ markup }) => (
                    <Editor
                      editorProps={{ $blockScrolling: Infinity }}
                      highlightActiveLine={false}
                      highlightGutterLine={false}
                      maxLines={Infinity}
                      mode="html"
                      name="html-editor"
                      readOnly
                      showCursor={false}
                      showGutter={false}
                      showPrintMargin={false}
                      tabSize={2}
                      theme="github"
                      value={markup}
                      width="100%"
                    />
                  )}
                </SourceRender.Consumer>
              </Grid.Column>
            </Grid>
          </Segment>

          <SourceRender.Consumer>
            {({ error }) =>
              error && (
                <Message attached error>
                  <pre>{error.toString()}</pre>
                </Message>
              )
            }
          </SourceRender.Consumer>
        </SourceRender>

        <Segment attached="bottom" style={{ padding: 0 }}>
          <Editor
            editorProps={{ $blockScrolling: Infinity }}
            maxLines={Infinity}
            minLines={10}
            mode="jsx"
            name="jsx-editor"
            onChange={this.handleSourceChange}
            tabSize={2}
            theme="github"
            value={source}
            width="100%"
          />

          <Label
            as="a"
            attached="bottom right"
            color="black"
            href="https://github.com/layershifter/react-source-render/blob/master/components/Sandbox.js"
            size="tiny"
            style={{ zIndex: 10 }}
            target="blank"
          >
            <Icon name="github" /> View source
          </Label>
        </Segment>
      </Fragment>
    )
  }
}
