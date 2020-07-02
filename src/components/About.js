import React from "react"
import { Container, AboutSection } from "../design/Styles"
import { Link } from "gatsby"
import Image from "../components/image"
import styled from "styled-components"

const HeaderText = styled.h1`
  margin-top: 50px;
`
export const About = () => {
  return (
    <AboutSection id="about">
      <HeaderText>Hi people</HeaderText>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </AboutSection>
  )
}
