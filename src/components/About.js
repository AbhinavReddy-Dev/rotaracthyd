import React from "react"
import { AboutSection, AboutHeader, AboutContent } from "../design/Styles"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const About = () => {
  const rotaryLogo = useStaticQuery(graphql`
    query {
      rotaryLogo: file(relativePath: { eq: "rotarylogo.png" }) {
        publicURL
      }
    }
  `)
  return (
    <AboutSection id="about">
      <img src={rotaryLogo.rotaryLogo.publicURL} alt="Rotary wheel"></img>
      <AboutHeader>
        <p>Learn more</p>
        <h1>About Us</h1>
      </AboutHeader>
      <AboutContent>
        <p>
          Rotaract clubs were founded in 1968 by Rotary International, a
          worldwide association of service-minded professional leaders.Rotaract
          clubs bring together people of ages 18-30 to exchange ideas with
          leaders in the community, develop leadership and professional skills,
          and have fun through service. Today there are over 10,904
          Rotary-supported Rotaract clubs with more than 250,792 members in some
          184 countries around the world. Rotaract is the collegiate level of
          Rotary International and related to the Interact Club from high
          school. Rotaract members decide how to organize and run their clubs,
          manage their own funds, and plan and carry out activities and service
          projects. Rotary club sponsors offer guidance and support and work
          with your club as partners in service.
        </p>
        <p>
          Here at Rotaract Club of Hyderabad, We leave no stone unturned in
          serving the society. We are a group of young adults solving real time
          problems with a great deal of commitment and responsibility. Rotaract
          Club Of Hyderabad has been in action since the chartered date,
          September 3, 1968. We invest passion, energy, time, and intelligence
          to achieve our goals. We often collaborate with other clubs and NGOs
          for projects that intersect with our goals in serving the society.
        </p>
      </AboutContent>
    </AboutSection>
  )
}
