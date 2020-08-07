import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

  function navshrink() {
    const resnav = document.querySelector(".res-nav")
    document.querySelector(".burger").classList.toggle("toggle")
    if (resnav.style.width === "70%") {
      resnav.style.width = "0%"
      for (var i = 0; i < resnav.childNodes.length; i++) {
        if (resnav.childNodes[i].nodeName.toLowerCase() == "a") {
          resnav.childNodes[i].style.display = "none"
        }
      }
    } else {
      resnav.style.width = "70%"
      for (var i = 0; i < resnav.childNodes.length; i++) {
        if (resnav.childNodes[i].nodeName.toLowerCase() == "a") {
          resnav.childNodes[i].style.display = "block"
        }
      }
    }
  }

  return (
    <NavBar>
      <NavContent>
        <NavLogo to="/">
          <img
            src={pinkLogo.pinklogo.publicURL}
            alt="pinkClubLogo"
            loading="lazy"
          />
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
        <Burger className="burger" onClick={() => navshrink()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </Burger>
      </NavContent>
      <ResNav />
    </NavBar>
  )
}
