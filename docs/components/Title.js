import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Head, withSiteData } from "react-static"
import { Button, Header, Image, Label, Segment } from "semantic-ui-react"

const Title = ({ version }) => (
  <Fragment>
    <Head>
      <title>React Sandbox Render</title>
    </Head>

    <Segment
      color="teal"
      inverted
      textAlign="center"
      style={{ minHeight: "20em", padding: "1em 0em" }}
      vertical
    >
      <Image centered size="small" src="/logo-white.png" />

      <Header
        as="h1"
        content={
          <Fragment>
            <span>React Source Render</span>
            <Label size="small">{version}</Label>
          </Fragment>
        }
        inverted
        style={{
          fontSize: "3em",
          fontWeight: "normal",
        }}
        subheader="An irreplaceable thing for sandbox with React."
      />

      <Button
        as="a"
        color="black"
        compact
        content="Check source on Github"
        href="https://github.com/layershifter/react-source-render"
        icon="github"
        target="_blank"
      />
    </Segment>
  </Fragment>
)

Title.propTypes = {
  version: PropTypes.string.isRequired,
}

export default withSiteData(Title)
