import React from "react"
import { FooterSection } from "../design/Styles"
export const Footer = () => {
  return (
    <FooterSection id="contact">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterSection>
  )
}
