import React from "react"
import { Container, SectionWrapper, Div } from "../design/Styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="200: Success" />
    <SectionWrapper
      bgcolor="#fe91ca"
      display="flex"
      flexWrap="wrap"
      textAlign="center"
    >
      <Container height="70vh" padding="6rem">
        <Div margin="2rem">
          <br></br>
          <br></br>
          <h1>Yaaay...!🎉 Your submission was successful</h1>
          <p>Please wait for us to respond, it will usually take 24 hours.</p>
        </Div>
      </Container>
    </SectionWrapper>
  </Layout>
)

export default SuccessPage
