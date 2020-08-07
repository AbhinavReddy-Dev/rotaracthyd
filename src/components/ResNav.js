import React from "react"

import { ResNavLinks, ResNavLink, NavLinkJoinMobile } from "../design/Styles"

export const ResNav = () => {
  function navShrink() {
    const resnav = document.querySelector(".res-nav")
    resnav.style.width = "0%"
    for (var i = 0; i < resnav.childNodes.length; i++) {
      if (resnav.childNodes[i].nodeName.toLowerCase() == "a") {
        resnav.childNodes[i].style.display = "none"
      }
    }
    document.querySelector(".burger").classList.toggle("toggle")
  }

  return (
    <ResNavLinks className="res-nav">
      <ResNavLink
        className="about"
        to="/#about"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        about
      </ResNavLink>
      <ResNavLink
        className="ourgoal"
        to="/#ourgoal"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our goal
      </ResNavLink>
      <ResNavLink
        className="ourteam"
        to="/#ourteam"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our team
      </ResNavLink>
      <ResNavLink
        className="ourwork"
        to="/#ourwork"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        our work
      </ResNavLink>
      <ResNavLink
        className="contact"
        to="/#contact"
        activeClassName="active"
        onClick={() => navShrink()}
      >
        contact
      </ResNavLink>
      <NavLinkJoinMobile to="/JoinUs" onClick={() => navShrink()}>
        join us!
      </NavLinkJoinMobile>
    </ResNavLinks>
  )
}
