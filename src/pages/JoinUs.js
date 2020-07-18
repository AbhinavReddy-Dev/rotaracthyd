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
import { navigate } from "gatsby-link"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const JoinUs = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
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
                Come be a part of the change.
              </span>
            </p>
            {/* <br></br> */}
            <p>
              We're always happy to connect with new talent and can't wait for
              you to be a part of Rotaract. Just drop in your details and answer
              a few questions which will help us get to know you better. It's
              going to be really simple, you'll get a call from us and we
              promise to make you feel like home.
            </p>
          </JoinUsContent>
          <JoinUsForm
            name="joinus"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            netlify
          >
            <h3>Come, join the cause!</h3>
            <span style={{ fontSize: ".7em" }}>
              Please fill all the * fields for us to contact you.
            </span>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
              Full Name *
              <input
                id="name"
                type="text"
                name="name"
                placeholder="enter your name"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email *
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your email"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="contact-number">
              Contact Number *
              <input
                id="contact-number"
                type="tel"
                name="contact-number"
                placeholder="your contact number"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="profession">
              Profession *
              <input
                id="profession"
                type="text"
                name="profession"
                placeholder="your profession"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="dob">
              Date Of Birth *
              <input
                id="dob"
                type="date"
                name="dob"
                placeholder="dd/mm/yyyy"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="howDidYouFindUs">
              How did you find us? *
              <input
                id="howDidYouFindUs"
                type="text"
                name="howDidYouFindUs"
                placeholder="eg., friend/ instagram/ whatsapp ..."
                onChange={handleChange}
              />
            </label>
            <label htmlFor="DoYouKnowAnyone">
              Do you know anyone from our club?
              <input
                id="DoYouKnowAnyone"
                type="text"
                name="DoYouKnowAnyone"
                placeholder="enter their name "
                onChange={handleChange}
              />
            </label>
            <label htmlFor="expectations">
              What do you expect from us?
              <textarea
                id="expectations"
                name="expectations"
                placeholder="type in your message"
                onChange={handleChange}
              />
            </label>
            <div data-netlify-captcha></div>
            <button type="submit">JOIN THE CLUB</button>
          </JoinUsForm>
        </JoinUsSection>
      </SectionWrapper>
      <Footer />
    </>
  )
}

export default JoinUs
