/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../../gatsby-starter-default/src/components/header"
import "./layout.css"


import { withPrefix } from "gatsby"
const Layout = ({ children }) => (
  <>
    <Header />
    <SEO title="Demo" />
    <Footer />
    <Helmet>
        <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/jquery.scrollex.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/jquery.scrolly.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/browser.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/breakpoints.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/util.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/main.js')} type="text/javascript" />
        <script type='text/javascript' src="/Users/scienz/scienz-website/scien-z.com/scienz(gatsby)/src/pages/jqeery-dev — копия.js"></script>
        <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </Helmet>
  </> 
)


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
