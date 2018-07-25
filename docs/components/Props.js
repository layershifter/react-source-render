import React, { Fragment } from "react"
import { Header, List, Segment, Table } from "semantic-ui-react"

const Usage = () => (
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
              <code>onError</code>
            </Table.Cell>
            <Table.Cell>
              <p>
                A callback that will be called after the render process that ended with an error.
              </p>

              <List bulleted>
                <List.Item>
                  <code>{`{Error}`} error</code>
                </List.Item>
                <List.Item>
                  <code>{`{Object}`} props</code>
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <code>onSuccess</code>
            </Table.Cell>
            <Table.Cell>
              <p>
                A callback that will be called after the render process that ended successfully.
              </p>

              <List bulleted>
                <List.Item>
                  <code>{`{Null}`} null</code>
                </List.Item>
                <List.Item>
                  <code>{`{Object}`} props</code>
                </List.Item>
              </List>
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

export default Usage
