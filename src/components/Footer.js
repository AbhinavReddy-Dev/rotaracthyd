import React from "react"
import { FooterSection, ContactUsForm } from "../design/Styles"
export const Footer = () => {
  return (
    <FooterSection>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <ContactUsForm
        name="myform"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <label htmlFor="name">
          Name
          <input id="name" type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="email" name="email" />
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
        <input type="submit" value="Submit" />
      </ContactUsForm>
    </FooterSection>
  )
}
