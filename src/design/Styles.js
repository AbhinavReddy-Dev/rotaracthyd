import React from "react"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}
body, html {
font-family: ${props => props.theme.fonts.default};
height: 100%;
background-color: ${props => props.theme.colors.bgColor}; 
}
h1{
    font-family:${props => props.theme.fonts.default};
    padding: 20px 0px;
}
`
export const Container = styled.section`
  width: 80%;
  padding: 10px;
`
