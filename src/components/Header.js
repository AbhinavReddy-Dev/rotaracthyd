// import PropTypes from “prop-types”
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from “gatsby-image”

import {
  NavBar,
  NavContent,
  NavLinks,
  NavLink,
  NavLinkJoin,
  NavLogo,
} from "../design/Styles"

export const Header = () => {
  const pinkLogo = useStaticQuery(graphql`
    query {
      pinklogo: file(relativePath: { eq: "pinkLogo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavBar>
      <NavContent>
        <NavLogo to="/">
          <img src={pinkLogo.pinklogo.publicURL} alt="pinkClubLogo" />
        </NavLogo>
        <NavLinks>
          <NavLink className="about" to="/#about" activeClassName="active">
            about
          </NavLink>
          <NavLink className="ourgoal" to="/#ourgoal" activeClassName="active">
            our goal
          </NavLink>
          <NavLink className="ourteam" to="/#ourteam" activeClassName="active">
            our team
          </NavLink>
          <NavLink className="ourwork" to="/#ourwork" activeClassName="active">
            our work
          </NavLink>
          <NavLink className="contact" to="/#contact" activeClassName="active">
            contact
          </NavLink>
        </NavLinks>
        <NavLinkJoin to="/JoinUs/">join us!</NavLinkJoin>
      </NavContent>
    </NavBar>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
