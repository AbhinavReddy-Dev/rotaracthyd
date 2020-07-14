import React from "react"
import {
  Container,
  Div,
  OurTeamWrapper,
  OurTeamSection,
  OurGoalCardSection,
  MemberCard,
} from "../design/Styles"
import { team } from "../design/content.json"
team.forEach(mem => console.log(mem))
export const OurTeam = () => {
  return (
    <OurTeamWrapper
      id="ourteam"
      bgcolor={props => props.theme.colors.secondaryColor}
    >
      <h1>Our Team</h1>
      <OurTeamSection
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {team.map((mem, index) => (
          <MemberCard key={index}>
            <Div display="flex" flexDirection="row">
              <img />
              <Div>
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
  )
}
