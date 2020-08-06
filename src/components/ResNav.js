import React from "react"

// import Img from “gatsby-image”

import { ResNavLinks, NavLink, NavLinkJoinMobile } from "../design/Styles"

export const ResNav = () => {
  function navShrink() {
    const resnav = document.querySelector(".res-nav")
    resnav.style.display = "none"
    document.querySelector(".burger").classList.toggle("toggle")
  }

  return (
    <ResNavLinks className="res-nav" style={{ display: "none" }}>
      <NavLink
        className="about"
        to="/#about"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        about
      </NavLink>
      <NavLink
        className="ourgoal"
        to="/#ourgoal"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our goal
      </NavLink>
      <NavLink
        className="ourteam"
        to="/#ourteam"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our team
      </NavLink>
      <NavLink
        className="ourwork"
        to="/#ourwork"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our work
      </NavLink>
      <NavLink
        className="contact"
        to="/#contact"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        contact
      </NavLink>
      <NavLinkJoinMobile to="/JoinUs" onClick={() => navShrink()}>
        join us!
      </NavLinkJoinMobile>
    </ResNavLinks>
  )
}
