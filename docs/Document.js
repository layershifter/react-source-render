import React from "react"

/* eslint-disable */
export default ({ Html, Head, Body, children, siteData, siteData: { dev, versions } }) => (
  <Html lang="en-US">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
      />

      <script
        src={`//cdn.jsdelivr.net/npm/@babel/standalone@${versions.babel.standalone}/babel.min.js`}
      />
      <script
        src={`//cdnjs.cloudflare.com/ajax/libs/prop-types/${versions.propTypes}/prop-types${
          siteData.dev ? "" : ".min"
        }.js`}
      />
      <script
        src={`//cdnjs.cloudflare.com/ajax/libs/react/${versions.react}/umd/react${
          dev ? ".development" : ".production.min"
        }.js`}
      />
      <script
        src={`//cdnjs.cloudflare.com/ajax/libs/react-dom/${versions.react}/umd/react-dom${
          dev ? ".development" : ".production.min"
        }.js`}
      />
      <script
        src={`//cdnjs.cloudflare.com/ajax/libs/react-dom/${
          versions.react
        }/umd/react-dom-server.browser${dev ? ".development" : ".production.min"}.js`}
      />
    </Head>

    <Body>{children}</Body>
  </Html>
)
