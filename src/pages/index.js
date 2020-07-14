import React from "react"
import Layout from "../components/layout"
import { About } from "../components/About"
import { LandingPage } from "../components/LandingPage"
import { OurGoal } from "../components/OurGoal"
import { Contact } from "../components/Contact"
import { OurTeam } from "../components/OurTeam"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Rotaract Club of Hyderabad" />
    <LandingPage />
    <hr />
    <About />
    <OurGoal />
    <OurTeam />
    <Contact />
  </Layout>
)

export default IndexPage
