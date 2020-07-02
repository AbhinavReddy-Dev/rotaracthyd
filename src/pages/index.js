import React from "react"
import Layout from "../components/layout"
import { About } from "../components/About"
import { LandingPage } from "../components/LandingPage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Rotaract Club of Hyderabad" />
    <LandingPage />
    <About />
  </Layout>
)

export default IndexPage
