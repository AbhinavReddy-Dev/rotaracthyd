import React from "react"
import {
  SectionWrapper,
  JoinUsSection,
  JoinUsContent,
  JoinUsForm,
} from "../design/Styles"
import SEO from "../components/seo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
const JoinUs = () => (
  <>
    <Header />
    <SEO title="Rotaract club of hyderabad | Join us!" />
    <SectionWrapper
      background="linear-gradient(
        155deg,
        #E9025A 0%,
        rgba(0, 109, 255, 1) 90%
      )"
      id="contact"
    >
      {/* <h1>Contact us</h1> */}
      <JoinUsSection>
        <JoinUsContent>
          <p>
            <h1>Join us!</h1>
            <span
              style={{
                fontWeight: "300",
                fontSize: "xx-large",
                borderBottomColor: "white",
              }}
            >
              Let's work together in building a world of peace and abundance.
            </span>
          </p>
          {/* <br></br> */}
          <p>
            <ul>
              <li>
                Commodo exercitation adipisicing aliqua nulla ut ipsum anim do
                ex nulla dolor labore enim cupidatat.
              </li>
              <li>
                Commodo exercitation adipisicing aliqua nulla ut ipsum anim do
                ex nulla dolor labore enim cupidatat.
              </li>
              <li>
                Commodo exercitation adipisicing aliqua nulla ut ipsum anim do
                ex nulla dolor labore enim cupidatat.
              </li>
              <li>
                Commodo exercitation adipisicing aliqua nulla ut ipsum anim do
                ex nulla dolor labore enim cupidatat.
              </li>
            </ul>
          </p>
        </JoinUsContent>
        <JoinUsForm
          name="joinus"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <h3>Come, join the cause!</h3>
          <span style={{ fontSize: ".7em" }}>
            Please fill all the * fields for us to contact you.
          </span>
          <input type="hidden" name="bot-field" />
          <label htmlFor="name">
            Full Name *
            <input
              id="name"
              type="text"
              name="name"
              placeholder="enter your name"
            />
          </label>
          <label htmlFor="email">
            Email *
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your email"
            />
          </label>
          <label htmlFor="contact-number">
            Contact Number *
            <input
              id="contact-number"
              type="tel"
              name="contact-number"
              placeholder="your contact number"
            />
          </label>
          <label htmlFor="profession">
            Profession *
            <input
              id="profession"
              type="text"
              name="profession"
              placeholder="your profession"
            />
          </label>
          <label htmlFor="dob">
            Date Of Birth *
            <input id="dob" type="date" name="dob" placeholder="dd/mm/yyyy" />
          </label>
          <label htmlFor="howDidYouFindUs">
            How did you find us? *
            <input
              id="howDidYouFindUs"
              type="text"
              name="howDidYouFindUs"
              placeholder="eg., friend/ instagram/ whatsapp ..."
            />
          </label>
          <label htmlFor="DoYouKnowAnyone">
            Do you know anyone from our club?
            <input
              id="DoYouKnowAnyone"
              type="text"
              name="DoYouKnowAnyone"
              placeholder="enter their name "
            />
          </label>
          <label htmlFor="expectations">
            What do you expect from us?
            <textarea
              id="expectations"
              name="expectations"
              placeholder="type in your message"
            />
          </label>
          <div data-netlify-captcha></div>
          <input type="submit" value="JOIN THE CLUB" />
        </JoinUsForm>
      </JoinUsSection>
    </SectionWrapper>
    <Footer />
  </>
)

export default JoinUs
