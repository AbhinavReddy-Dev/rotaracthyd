import React from "react"
import { Container, SectionWrapper, Div } from "../design/Styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="200: Success" />
    <SectionWrapper bgcolor="#fe91ca" display="flex" textAlign="center">
      <Container
        height="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Div
          margin="50% 3%"
          style={{
            color: "white",
          }}
        >
          <h1 style={{ textTransform: "uppercase" }}>
            Yaaay...! 🎉 Your submission was successful
          </h1>
          <br />
          <p>Please wait for us to respond, it will usually take 24 hours.</p>
        </Div>
      </Container>
    </SectionWrapper>
  </Layout>
)

export default SuccessPage
