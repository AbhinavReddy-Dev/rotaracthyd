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
background-color: ${props => props.theme.colors.lightColor}; 
scroll-behavior:smooth;
}
h1, h2, h3, h4, h5, h6{
    font-family:${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
}
`
export const Container = styled.section`
  margin: 0 auto;
  width: 80%;
  padding: 10px 0px;
`
export const NavBar = styled.header`
  width: 100%;
  height: 3.6rem;
  background-color: ${props => props.theme.colors.bgColor};
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${props => props.theme.boxShadowLite};
  transition: 0.5s ease-in;
  &.scrolling-active {
    background-color: ${props => props.theme.colors.primaryColor};
    img {
      filter: brightness(0) invert(1);
    }
  }
`
export const NavContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`
export const NavLinks = styled(NavContent)`
  width: 50%;
  height: 100%;
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  letter-spacing: 1px;
  padding: 0px 10px;
  transition: 0.5s ease-in;
  &:after {
    display: block;
    content: "";
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 350ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }

  &.active {
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
  }
  ${NavBar}.scrolling-active & {
    color: ${props => props.theme.colors.bgColor};
    font-weight: ${props => props.theme.fontWeight.bold};

    &:after {
      border-bottom: 2px solid ${props => props.theme.colors.bgColor};
    }
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    font-size: ${props => props.theme.fontSize.xsmall};
  }
`
export const NavLinkJoin = styled(NavLink)`
  height: 100%;
  color: ${props => props.theme.colors.lightColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 6px 30px;
  font-weight: ${props => props.theme.fontWeight.black};
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 25px;
  transition: 0.3s ease-out;
  &:hover {
    transition: 0.3s ease-in;
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    box-shadow: ${props => props.theme.boxShadow};
  }
  &:after {
    border-bottom: none;
  }
  ${NavBar}.scrolling-active & {
    color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    border: 2px solid ${props => props.theme.colors.bgColor};
    &:hover {
      color: ${props => props.theme.colors.bgColor};
      border: 2px solid ${props => props.theme.colors.bgColor};
      background-color: ${props => props.theme.colors.primaryColor};
      box-shadow: none;
    }
  }
`
export const NavLogo = styled(Link)`
  margin: 0;
  transition: 0.3s ease-in;
  img {
    max-height: 2.5rem;
  }

  @media ${props => props.theme.mediaQuery.Mobile} {
    img {
      max-height: 2rem;
    }
  }
`
export const LandingImage = styled.section`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #092448;
    opacity: 0.8;
  }
`
export const LandingContent = styled.section`
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 40%;
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
    margin-top: 15px;
    font-weight: ${props => props.theme.fontWeight.light};
    font-size: ${props => props.theme.fontSize.medium};
    word-spacing: 5px;
  }
  h4 {
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    bottom: 35%;
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
      width: 45%;
    }
  }
`

// ${props => props.theme.};

// @media ${props => props.theme.mediaQuery.Laptop} { }
// @media ${props => props.theme.mediaQuery.Tablet} { }
// @media ${props => props.theme.mediaQuery.Mobile} { }
