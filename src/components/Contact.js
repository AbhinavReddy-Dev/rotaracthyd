import React from "react"
import {
  SectionWrapper,
  ContactSection,
  ContactContent,
  ContactUsForm,
} from "../design/Styles"
export const Contact = () => {
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
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <h3>Write to us</h3>
          <input type="hidden" name="bot-field" />
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              placeholder="enter your name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              placeholder="type in your message"
            />
          </label>
          <div data-netlify-captcha></div>
          <button type="submit" value="SEND MAIL">
            SEND MAIL
          </button>
        </ContactUsForm>
      </ContactSection>
    </SectionWrapper>
  )
}
