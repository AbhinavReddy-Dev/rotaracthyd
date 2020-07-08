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
export const SectionWrapper = styled.div`
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  &#contact {
    h1 {
      word-spacing: 10px;
      text-transform: uppercase;
      padding-bottom: 2rem;
      color: white;
    }
  }
`
export const Div = styled.div`
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
`
export const NavBar = styled.header`
  width: 100%;
  height: 3.6rem;
  position: absolute;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in;
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
  /* transition: 0.8s ease-in; */
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
      font-size: ${props => props.theme.fontSize.xxsmall};

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
  font-weight: ${props => props.theme.fontWeight.bold};
  border: 2px solid ${props => props.theme.colors.bgColor};
  border-radius: 25px;
  transition: 0.4s ease-out;
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
    font-weight: ${props => props.theme.fontWeight.normal};
    padding: 4px 20px;

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

  @media ${props => props.theme.mediaQuery.Laptop} {
    img {
      max-height: 1.8rem;
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
  margin-bottom: 2rem;
  h1 {
    word-spacing: 10px;
    font-family: ${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.large};
    text-transform: uppercase;
  }
  img {
    position: absolute;
    top: -13.5%;
    left: 50%;
    transform: translateX(-50%);
    max-height: 5rem;
    max-width: 5rem;
    @media ${props => props.theme.mediaQuery.Laptop} {
      top: -12.8%;
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
    @media ${props => props.theme.mediaQuery.Laptop} {
      font-size: ${props => props.theme.fontSize.xsmall};
    }
  }
`

export const OurGoalSection = styled(Container)`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
  h1 {
    word-spacing: 10px;
    text-transform: uppercase;
  }
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
  width: 38rem;
  margin: 3rem 1rem 0 1rem;
  border: solid 2px pink;
  position: relative;
  transition: 0.1s ease-in-out;
  @media ${props => props.theme.mediaQuery.Laptop} {
    height: 12rem;
    width: 25rem;
    h3{
    font-size: ${props => props.theme.fontSize.small};
    }
  }
  :before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondaryColor};
    opacity: 0.7;
  }
  h3{
    color: white;
    text-transform: uppercase;
    margin: 0;
    padding: 0 2rem;
    line-height: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    word-spacing: 8px;
  }
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  :hover:after{
      transition: 0.5s ease-in-out;
      color: white;
      line-height: 1.5em;
      background-color: palevioletred;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      @media ${props => props.theme.mediaQuery.Laptop} {
    font-size: ${props => props.theme.fontSize.xsmall};
      }
  }
  &:nth-child(1) {
    background-image:url(https://www.rotary.org/sites/default/files/styles/w_2800/public/peace%20hero.jpg?itok=D9BbOHiP);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.promotingPeace}";
    }
  }
  &:nth-child(2) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20disease%20hero%202800x1800.JPG?itok=i7HJ73tH);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.fightingDisease}";
    }
  }
  &:nth-child(3) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/new%20water%20hero%202.jpg?itok=kuIJmchv);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.providingCWSH}";
    }
  }
  &:nth-child(4) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20women%20hero%202800x1800.jpg?itok=raWI45Jk);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.savingMothersnChildren}";
    }
  }
  &:nth-child(5) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20education%20hero%202800x1800.JPG?itok=w0FpiBY2);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.supportingEducation}";
    }
  }
  &:nth-child(6) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_350/public/cause%20CI%20economy%20700x500.JPG?itok=rPMD-Yn-);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.growingLocalEcon}";
    }
  }
  &:nth-child(7) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/Area_of_focus_Environment_Hero_SHU1317118457.jpg?itok=ja7KYpRM);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.supportingEnvironment}";
    }
  }
`

export const ContactSection = styled(Container)`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`
export const ContactContent = styled.div`
  width: 40%;
  padding: 1.5rem;
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 55%;
  }
  p {
    /* width: 30%; */
    line-height: 2em;
    font-weight: ${props => props.theme.fontWeight.light};
    span {
      line-height: 2.1em;
      border-bottom: 4px solid ${props => props.theme.colors.primaryColor};
    }
  }
`
export const ContactUsForm = styled.form`
  width: 27%;
  margin: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 6px;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: ${props => props.theme.fontSize.xsmall};
  padding-top: 0;
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 35%;
  }
  h3 {
    margin: 0 0 0.5rem 0;
    align-self: center;
    padding: 1.5rem 0;
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeight.normal};
    letter-spacing: 0.05em;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
  }
  input,
  textarea {
    padding: 0.5em;
    width: 100%;
    font-weight: ${props => props.theme.fontWeight.light};
    padding-left: 0;
  }
  ::placeholder {
    font-size: ${props => props.theme.fontSize.xxsmall};
    color: lightblue;
    opacity: 0.8;
  }
  input[type="text"],
  input[type="email"] {
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    height: 1.8rem;
  }
  textarea {
    height: 4rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
  }
  input[type="submit"] {
    background-color: #3cbc8d;
    color: white;
    margin-top: 1.5rem;
    padding: 0.5em;
    width: 8rem;
    border: none;
    font-weight: ${props => props.theme.fontWeight.normal};
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`
export const FooterSection = styled.footer`
  width: 80%;
  margin: 0 auto;
  bottom: 0;
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: space-evenly;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* align-content: flex-start; */
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 90%;
  }
  h4 {
    font-weight: ${props => props.theme.fontWeight.normal};
  }
`
export const SocialMedia = styled(Div)`
  width: 10rem;
  img {
    width: 1.5rem;
    :hover {
      opacity: 0.7;
    }
  }
`
export const RawMedia = styled(SocialMedia)`
  height: 7rem;
  width: 10rem;
  text-align: center;
  p {
    font-size: ${props => props.theme.fontSize.xsmall};
  }
`
export const CopyRight = styled.p`
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-wrap: ${props => props.flexWrap};
  justify-content: center;
  a {
    color: blueviolet;
    text-decoration: none;
    margin-left: 0.5em;
    :hover {
      color: ${props => props.theme.colors.primaryColor};
    }
  }
`
export const FooterJoinLink = styled(Link)`
  color: ${props => props.theme.colors.bgColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 5px 25px;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 25px;
  transition: 0.4s ease-out;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in;
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    box-shadow: ${props => props.theme.boxShadow};
  }
`
// ${props => props.theme.};

// @media ${props => props.theme.mediaQuery.Laptop} { }
// @media ${props => props.theme.mediaQuery.Tablet} { }
// @media ${props => props.theme.mediaQuery.Mobile} { }
