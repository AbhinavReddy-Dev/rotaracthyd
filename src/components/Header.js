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
  Burger,
} from "../design/Styles"
import { ResNav } from "./ResNav"

export const Header = () => {
  const pinkLogo = useStaticQuery(graphql`
    query {
      pinklogo: file(relativePath: { eq: "pinkLogo.png" }) {
        publicURL
      }
    }
  `)
  // window.addEventListener("scroll", function () {
  //   let header = document.querySelector("header")
  //   let windowPosition = window.scrollY > 0
  //   header.classList.toggle("scrolling-active", windowPosition)
  // })
  function navshrink() {
    const resnav = document.querySelector(".res-nav")
    if (resnav.style.display === "none") {
      resnav.style.display = "flex"
    } else {
      resnav.style.display = "none"
    }
  }
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
        <NavLinkJoin to="/JoinUs">join us!</NavLinkJoin>
        <Burger onClick={() => navshrink()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </Burger>
      </NavContent>
      <ResNav />
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
