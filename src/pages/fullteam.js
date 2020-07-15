import React from "react"
import {
  Div,
  OurTeamWrapper,
  OurTeamSection,
  MemberCard,
} from "../design/Styles"
import Image from "../components/ProfileImages"
import { team } from "../design/content.json"
import SEO from "../components/seo"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const fullteam = () => {
  return (
    <div>
      <Header />
      <SEO title="Rotaract club of hyderabad | Join us!" />
      <OurTeamWrapper
        id="ourteam"
        bgcolor={props => props.theme.colors.secondaryColor}
      >
        <hr></hr>
        <br></br>
        <h1>Our Team</h1>
        <p>Meet our team of Incredibles</p>
        <OurTeamSection
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {team.map((mem, index) => (
            <MemberCard key={index}>
              <Div display="flex" flexDirection="row">
                <Image
                  alt={mem.name}
                  filename={mem.photo ? mem.photo : "rotarylogo.png"}
                />
                <Div margin="auto 0">
                  <h4>{mem.name}</h4>
                  <p>{mem.role}</p>
                  <p>
                    <span>{mem.profession}</span>
                  </p>
                </Div>
              </Div>
            </MemberCard>
          ))}
        </OurTeamSection>
      </OurTeamWrapper>
      <Footer />
    </div>
  )
}
export default fullteam
