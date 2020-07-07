import React from "react"
import {
  SectionWrapper,
  OurGoalSection,
  OurGoalCardSection,
  OurGoalCard,
} from "../design/Styles"

export const OurGoal = () => {
  return (
    <SectionWrapper
      bgcolor={props => props.theme.colors.lightColor}
      id="ourgoal"
    >
      <OurGoalSection>
        <h1>Our Goal</h1>
        <p>We have 7 areas of focus for the better future of the world...</p>
        <OurGoalCardSection>
          <OurGoalCard>
            <h3>Promoting Peace</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Fighting Disease</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Providing Clean Water, Sanitation, and Hygiene</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Saving Mothers and Children</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Supporting Education</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Growing Local Economies</h3>
          </OurGoalCard>
          <OurGoalCard>
            <h3>Supporting The Environment</h3>
          </OurGoalCard>
        </OurGoalCardSection>
      </OurGoalSection>
    </SectionWrapper>
  )
}
