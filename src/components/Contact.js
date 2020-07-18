import React from "react"
import {
  SectionWrapper,
  ContactSection,
  ContactContent,
  ContactUsForm,
} from "../design/Styles"
import { navigate } from "gatsby-link"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export const Contact = () => {
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
    <SectionWrapper
      bgcolor={props => props.theme.colors.secondaryColor}
      id="contact"
    >
      {/* <h1>Contact us</h1> */}
      <ContactSection>
        <ContactContent>
          <h1>Contact us</h1>
          <p>
            <span
              style={{
                fontWeight: "300",
                fontSize: "xx-large",
              }}
            >
              Let's work together in building a world of peace and abundance.
            </span>
          </p>
          {/* <br></br> */}
          <p>
            Reach out to us if you have anything on your mind that we can help
            with, also we do collaborations with other clubs and organisations
            that share our vision for the world.
          </p>
        </ContactContent>
        <ContactUsForm
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={handleSubmit}
        >
          <h3>Write to us</h3>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" onChange={handleChange} />
          <label>
            Name
            <input
              id="name"
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              id="message"
              name="message"
              placeholder="type in your message"
              onChange={handleChange}
            />
          </label>
          <div data-netlify-captcha></div>
          <button type="submit">SEND MAIL</button>
        </ContactUsForm>
      </ContactSection>
    </SectionWrapper>
  )
}
