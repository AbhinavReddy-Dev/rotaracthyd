// import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

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
      pinkLogo: file(relativePath: { eq: "pinkLogo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavBar>
      <NavContent>
        <NavLogo to="#home">
          <img src={pinkLogo.pinkLogo.publicURL} alt="pinkClubLogo" />
        </NavLogo>
        <NavLinks>
          <NavLink to="#about">about</NavLink>
          <NavLink to="#ourgoal">our goal</NavLink>
          <NavLink to="#ourwork">our work</NavLink>
          <NavLink to="#ourteam">our team</NavLink>
          <NavLink to="#contact">contact</NavLink>
        </NavLinks>
        <NavLinkJoin to="#joinus">join us!</NavLinkJoin>
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
