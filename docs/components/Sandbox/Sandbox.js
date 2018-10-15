import { Grid, Header, Icon, Label, Message, Segment } from "semantic-ui-react"
import React, { Component, Fragment } from "react"
import AceEditor from "react-ace"
import SourceRender from "react-source-render"

import "brace/mode/jsx"
import "brace/mode/html"
import "brace/theme/github"

const imports = {
  react: React,
}

const resolver = path => imports[path]

export default class Sandbox extends Component {
  state = {
    markup: "",
    source: `import React from "react";

const Example = <div>Hello world!</div>;
 
export default Example
`,
  }

  handleSourceChange = source => this.setState({ source })

  handleRenderError = error => this.setState({ error })

  handleRenderSuccess = (error, { markup }) => this.setState({ error, markup })

  render() {
    const { error, markup, source } = this.state

    return (
      <Fragment>
        <Header as="h2">Live sandbox</Header>

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

              <SourceRender
                onError={this.handleRenderError}
                onSuccess={this.handleRenderSuccess}
                resolver={resolver}
                source={source}
              />
            </Grid.Column>
            <Grid.Column>
              <Label attached="top right" color="teal" size="tiny">
                Rendered HTML
              </Label>

              <AceEditor
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
            </Grid.Column>
          </Grid>
        </Segment>

        <Segment attached={error ? true : "bottom"} style={{ padding: 0 }}>
          <AceEditor
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
            href="https://github.com/layershifter/react-source-render/blob/master/docs/components/Sandbox"
            size="tiny"
            style={{ zIndex: 10 }}
            target="blank"
          >
            <Icon name="github" /> View source
          </Label>
        </Segment>

        {error && (
          <Message attached="bottom" error>
            <pre>{error.toString()}</pre>
          </Message>
        )}
      </Fragment>
    )
  }
}
