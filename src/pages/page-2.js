import React from "react"
import { Link } from "gatsby"
import { Container } from "../design/Styles"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
const SecondPage = () => (
  <>
    <Header />
    <SEO title="Rotaract club of hyderabad | Join us!" />
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
    <Footer />
  </>
)

export default SecondPage
