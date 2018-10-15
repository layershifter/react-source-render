import React from "react"

/* eslint-disable */
export default ({ Html, Head, Body, children, siteData, siteData: { dev, versions } }) => (
  <Html lang="en-US">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" />

      <script
        src={`//cdn.jsdelivr.net/npm/@babel/standalone@${versions.babel.standalone}/babel.min.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/prop-types@${versions.propTypes}/prop-types${
          siteData.dev ? "" : ".min"
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react@${versions.react}/umd/react${
          dev ? ".development" : ".production.min"
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react-dom@${versions.react}/umd/react-dom${
          dev ? ".development" : ".production.min"
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react-dom@${versions.react}/umd/react-dom-server.browser${
          dev ? ".development" : ".production.min"
        }.js`}
      />
    </Head>

    <Body>{children}</Body>
  </Html>
)
