import React from "react"
import { Link } from "gatsby"
import {
  Div,
  OurTeamWrapper,
  OurTeamSection,
  MemberCard,
} from "../design/Styles"
import Image from "./ProfileImages"
import { team } from "../design/content.json"

// team.map(mem => console.log(mem.name, mem.photo))

export const OurTeam = () => {
  return (
    <OurTeamWrapper id="ourteam" bgcolor="#13beaa">
      <h1>Our Team</h1>
      <p>Meet our team of Incredibles</p>
      <OurTeamSection
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {team.slice(0, 16).map((mem, index) => (
          <MemberCard key={index}>
            <Div display="flex" flexDirection="row">
              <Image
                alt={mem.name}
                filename={mem.photo ? mem.photo : "rotarylogo.png"}
              />
              <Div margin="auto 0">
                <h4>Rtr. {mem.name}</h4>
                <p>{mem.role}</p>
                <p>
                  <span>{mem.profession}</span>
                </p>
              </Div>
            </Div>
          </MemberCard>
        ))}
      </OurTeamSection>
      <Link to="/fullteam">See full team</Link>
    </OurTeamWrapper>
  )
}
