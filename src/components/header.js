import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_white.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1rem 0rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          paddingRight: "50px",
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="" height={100} />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
