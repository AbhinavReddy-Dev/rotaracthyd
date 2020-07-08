import React from "react"
import {
  SectionWrapper,
  Div,
  FooterSection,
  SocialMedia,
  CopyRight,
} from "../design/Styles"
import rotaractVideo from "../../src/images/rotaractVideo.mp4"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

export const Footer = () => {
  return (
    <SectionWrapper display="flex" flexDirection="column">
      <FooterSection display="flex" flexWrap="wrap">
        <video loop="true" autoplay="autoplay" controls muted width="300rem">
          <source src={rotaractVideo} type="video/mp4" />
        </video>
        <SocialMedia display="flex" flexDirection="column">
          <h4>Find us on</h4>
          <Div display="flex" flexWrap="wrap" justifyContent="space-between">
            <a href="/">
              <img src={facebook} alt="facebook"></img>
            </a>
            <a href="/">
              <img src={instagram} alt="instagram"></img>
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="/">
              <img src={twitter} alt="twitter"></img>
            </a>
          </Div>
        </SocialMedia>
      </FooterSection>
      <CopyRight
        display="flex"
        flexWrap="wrap"
        bgcolor={props => props.theme.colors.lightColor}
      >
        © {new Date().getFullYear()}, Built with ❤️ by Abhinav Reddy
        {` `}
      </CopyRight>
    </SectionWrapper>
  )
}
