import React from "react"
import Layout from "../components/layout"
import { About } from "../components/About"
import { LandingPage } from "../components/LandingPage"
import { OurGoal } from "../components/OurGoal"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Rotaract Club of Hyderabad" />
    <LandingPage />
    <hr />
    <About />
    <hr id="ourgoal" />
    <OurGoal />
  </Layout>
)

export default IndexPage
