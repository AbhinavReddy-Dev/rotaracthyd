import React from "react"
import Layout from "../components/layout"
import { About } from "../components/About"
import { LandingPage } from "../components/LandingPage"
import { OurGoal } from "../components/OurGoal"
import { Contact } from "../components/Contact"
import { OurTeam } from "../components/OurTeam"
import { OurWork } from "../components/OurWork"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Rotaract Club of Hyderabad" />
    <LandingPage />
    <About />
    <OurGoal />
    <OurTeam />
    <OurWork />
    <Contact />
  </Layout>
)

export default IndexPage
