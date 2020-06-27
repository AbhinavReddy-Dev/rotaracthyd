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
}
h1{
    font-family:${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding: 20px 0px;
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
  color: ${props => props.theme.colors.darkColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  letter-spacing: 1px;
  padding: 0px 5px;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
  }
  .active {
    color: ${props => props.theme.colors.primaryColor};
  }
`
export const NavLinkJoin = styled(NavLink)`
  height: 100%;
  color: ${props => props.theme.colors.lightColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 6px 30px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 25px;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    box-shadow: ${props => props.theme.boxShadow};
  }
`
export const NavLogo = styled(Link)`
  margin: 0;
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
  /* position: fixed; */
`

// ${props => props.theme.};

// @media ${props => props.theme.mediaQuery.Laptop} { }
// @media ${props => props.theme.mediaQuery.Tablet} { }
// @media ${props => props.theme.mediaQuery.Mobile} { }
