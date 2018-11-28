import React, { Fragment } from "react"
import { Header, Segment, Table } from "semantic-ui-react"

const Props = () => (
  <Fragment>
    <Header as="h2">Component props</Header>

    <Segment
      basic
      style={{
        background: "rgb(255, 255, 255)",
        boxShadow: "rgb(204, 204, 204) 0px 1px 2px",
      }}
    >
      <Table basic="very">
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <code>babelConfig</code>
            </Table.Cell>
            <Table.Cell>A config for Babel.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <code>renderHtml</code>
            </Table.Cell>
            <Table.Cell>
              An option that controls rendering of HTML with ReactDOM server, it allows to omit
              rendering when you are using portals.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <code>resolver</code>
            </Table.Cell>
            <Table.Cell>A function for the imports resolution.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <code>source</code>
            </Table.Cell>
            <Table.Cell>A string that contains the source code.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  </Fragment>
)

export default Props
