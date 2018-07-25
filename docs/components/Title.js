import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Head, withSiteData } from "react-static"
import { Header, Image, Label, Segment } from "semantic-ui-react"

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
        content="React Source Render"
        inverted
        style={{
          fontSize: "3em",
          fontWeight: "normal",
        }}
        subheader="An irreplaceable thing for sandbox with React."
      />
      <Label>{version}</Label>
    </Segment>
  </Fragment>
)

Title.propTypes = {
  version: PropTypes.string.isRequired,
}

export default withSiteData(Title)
