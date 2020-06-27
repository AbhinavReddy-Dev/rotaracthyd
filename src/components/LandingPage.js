import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LandingImage } from "../design/Styles"

export const LandingPage = () => {
  const landingImage = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "landingImage.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LandingImage>
      <Img fluid={landingImage.landingImage.childImageSharp.fluid} />
    </LandingImage>
  )
}
