import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

const WorkImages = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { relativeDirectory: { eq: "ourwork" } }) {
          edges {
            node {
              relativePath
              name
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return <img alt={props.alt} />
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <img
          alt={props.alt}
          //   fluid={image.node.childImageSharp.fluid}
          src={image.node.publicURL}
          loading="lazy"
        />
      )
    }}
  />
)

export default WorkImages
