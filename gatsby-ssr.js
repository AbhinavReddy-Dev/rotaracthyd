import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/design/Theme"
import { GlobalStyle } from "./src/design/Styles"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
