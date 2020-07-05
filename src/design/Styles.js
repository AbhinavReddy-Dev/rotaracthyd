import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}
body, html {
font-family: ${props => props.theme.fonts.dFont};
height: 100%;
background-color: ${props => props.theme.colors.bgColor}; 
scroll-behavior:smooth;
}
h1, h2, h3, h4, h5, h6{
    font-family:${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
}
`

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 10px 5px;
  position: relative;
`
export const NavBar = styled.header`
  width: 100%;
  height: 3.6rem;
  position: absolute;
  top: 0;
  z-index: 10;
  transition: 0.4s ease-in;
  img {
    filter: brightness(0) invert(1);
  }
  &.scrolling-active {
    position: fixed;
    background-color: ${props => props.theme.colors.bgColor};
    height: 3rem;
    box-shadow: ${props => props.theme.boxShadowLite};
    img {
      filter: none;
      height: 2rem;
    }
  }
`
export const NavContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  ${NavBar}.scrolling-active & {
    padding: 7px 0px;
  }
`
export const NavLinks = styled(NavContent)`
  width: 50%;
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.bgColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  letter-spacing: 1px;
  transition: 0.8s ease-in;
  &:after {
    display: block;
    content: "";
    border-bottom: 2px solid ${props => props.theme.colors.bgColor};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 350ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }

  .active & {
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
  }
  ${NavBar}.scrolling-active & {
    font-weight: ${props => props.theme.fontWeight.normal};
    color: ${props => props.theme.colors.secondaryColor};

    &:after {
      border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    }
  }

  @media ${props => props.theme.mediaQuery.Laptop} {
    font-size: ${props => props.theme.fontSize.xsmall};
    ${NavBar}.scrolling-active & {
      font-weight: ${props => props.theme.fontWeight.normal};
    }
  }
`
export const NavLinkJoin = styled(NavLink)`
  /* height: 100%; */
  color: ${props => props.theme.colors.lightColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 6px 30px;
  font-weight: ${props => props.theme.fontWeight.black};
  border: 2px solid ${props => props.theme.colors.bgColor};
  border-radius: 25px;
  transition: 0.8s ease-out;
  &:hover {
    transition: 0.3s ease-in;
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    /* box-shadow: ${props => props.theme.boxShadow}; */
  }
  &:after {
    border-bottom: none;
  }
  ${NavBar}.scrolling-active & {
    color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    font-weight: ${props => props.theme.fontWeight.bold};

    &:hover {
      color: ${props => props.theme.colors.bgColor};
      border: 2px solid ${props => props.theme.colors.primaryColor};
      background-color: ${props => props.theme.colors.primaryColor};
      box-shadow: none;
    }
    &:after {
      border-bottom: none;
    }
  }
`
export const NavLogo = styled(Link)`
  transition: 1s ease-in-out;
  padding-top: 2px;
  img {
    margin: 0;
    max-height: 2.2rem;
  }

  @media ${props => props.theme.mediaQuery.Mobile} {
    img {
      max-height: 2rem;
    }
  }
`
export const LandingImage = styled.section`
  position: relative;
  .landingImg img {
    position: fixed;
  }
  .landingImg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      155deg,
      rgba(255, 90, 100, 1) 0%,
      rgba(0, 109, 255, 1) 90%
    );
    opacity: 0.85;
  }
`
export const LandingContent = styled.section`
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 15%;
  right: 50%;
  transform: translateX(50%);
  color: #fff;
  text-align: center;
  .content-wrap {
    margin: 0 auto;
    width: 34%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  h1 {
    margin: 0;
    font-weight: ${props => props.theme.fontWeight.black};
    font-size: ${props => props.theme.fontSize.xlarge};
    word-spacing: 15px;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: ${props => props.theme.fontWeight.light};
    font-size: ${props => props.theme.fontSize.medium};
    word-spacing: 5px;
  }
  h4 {
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    bottom: 10%;
    h1 {
      font-size: ${props => props.theme.fontSize.large};
    }
    h3 {
      font-size: ${props => props.theme.fontSize.medium};
    }
    h4 {
      font-size: ${props => props.theme.fontSize.medium};
    }
    .content-wrap {
      width: 48%;
    }
  }
`
export const AboutSection = styled(Container)`
  background-color: ${props => props.theme.colors.bgColor};
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    word-spacing: 20px;
    font-family: ${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.large};
    text-transform: uppercase;
  }
  img {
    position: absolute;
    top: -8.5%;
    left: 50%;
    transform: translateX(-50%);
    max-height: 5rem;
    max-width: 5rem;
    @media ${props => props.theme.mediaQuery.Laptop} {
      top: -8.5%;
    }
  }
`
export const AboutHeader = styled.div`
  text-align: center;
  p {
    margin-top: 2.2rem;
    font-weight: ${props => props.theme.fontWeight.light};
    color: ${props => props.theme.colors.primaryColor};
  }
`
export const AboutContent = styled.section`
  width: 100%;
  margin: 0 auto;
  p {
    line-height: 2em;
    font-size: ${props => props.theme.fontSize.small};
  }
`
export const OurGoalSection = styled(Container)`
  text-align: center;
  p {
    margin-top: 2rem;
    font-weight: ${props => props.theme.fontWeight.light};
    color: ${props => props.theme.colors.primaryColor};
  }
`

export const OurGoalCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const OurGoalCard = styled.div`
  height: 15rem;
  width: 35rem;
  margin: 3rem 0 0 0;
  border: solid 2px pink;
  position: relative;
  transition: 0.1s ease-in-out;
  h3{
    text-transform: uppercase;
    margin: 0;
  padding: 0 2rem;
  line-height: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    word-spacing: 15px;

  }
  p {
    color: ${props => props.theme.colors.secondaryColor};
  }
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  :hover:after{
      transition: 0.5s ease-in-out;
      color: white;
    line-height: 2em;
      background-color: pink;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
  }
  &:nth-child(1) {
    &:hover:after {
      content: "${props => props.theme.promotingPeace}";
    }
  }
  &:nth-child(2) {
    &:hover:after {
      content: "${props => props.theme.fightingDisease}";
    }
  }
  &:nth-child(3) {
    &:hover:after {
      content: "${props => props.theme.providingCWSH}";
    }
  }
  &:nth-child(4) {
    &:hover:after {
      content: "${props => props.theme.savingMothersnChildren}";
    }
  }
  &:nth-child(5) {
    &:hover:after {
      content: "${props => props.theme.supportingEducation}";
    }
  }
  &:nth-child(6) {
    &:hover:after {
      content: "${props => props.theme.growingLocalEcon}";
    }
  }
  &:nth-child(7) {
    &:hover:after {
      content: "${props => props.theme.supportingEnvironment}";
    }
    width: 50rem;
  }
  
`

// ${props => props.theme.};

// @media ${props => props.theme.mediaQuery.Laptop} { }
// @media ${props => props.theme.mediaQuery.Tablet} { }
// @media ${props => props.theme.mediaQuery.Mobile} { }
