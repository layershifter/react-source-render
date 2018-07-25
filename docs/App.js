import React, { Fragment } from "react"
import { Container, Divider, Grid, Header, List, Icon, Image, Segment } from "semantic-ui-react"

import Props from "./components/Props"
import Sandbox from "./components/Sandbox"
import Title from "./components/Title"
import QuickStart from "./components/QuickStart"
import Usage from "./components/Usage"

const App = () => (
  <Fragment>
    <style>{`body {background: #f7f7f7}`}</style>

    <Title />

    <Container>
      <Divider hidden />

      <Header as="h2">Solved problem</Header>
      <Segment
        basic
        style={{
          background: "rgb(255, 255, 255)",
          boxShadow: "rgb(204, 204, 204) 0px 1px 2px",
        }}
      >
        <p>
          This component was initially designed to replace the{" "}
          <a
            href="https://github.com/Semantic-Org/Semantic-UI-React/blob/e786724c73a6446fc5e86828ba446c18d4a9baab/docs/src/components/ComponentDoc/ComponentExample/renderExampleSourceCode.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            existing render
          </a>{" "}
          playground in Semantic UI React docs. React Source Render is designed to be used with{" "}
          <a
            href="https://babeljs.io/docs/en/next/babel-standalone.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Babel Standalone
          </a>
          . The component consists from the parts:
        </p>

        <List bulleted>
          <List.Item>rendering component</List.Item>
          <List.Item>Babel plugin to transform imports and resoolve them</List.Item>
          <List.Item>Babel plugin to transform code to IIFE</List.Item>
        </List>
      </Segment>

      <QuickStart />
      <Sandbox />
      <Props />
      <Usage />
    </Container>

    <Segment basic inverted>
      <Grid as={Container} columns={2}>
        <Grid.Column>
          <a
            href="https://github.com/layershifter"
            rel="noopener noreferrer"
            title="Follow me on Github"
          >
            <Icon color="grey" name="github" size="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/layershifter/"
            rel="noopener noreferrer"
            title="Check my profile in LinkedIn"
          >
            <Icon color="grey" name="linkedin in" size="large" />
          </a>
        </Grid.Column>
        <Grid.Column textAlign="right">
          Proudly powered by
          <a
            href="https://react.semantic-ui.com"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
            target="_blank"
          >
            <Image style={{ height: 20, marginRight: 2 }} spaced src="/logo-sui.png" /> Semantic UI
          </a>
        </Grid.Column>
      </Grid>
    </Segment>
  </Fragment>
)

export default App
