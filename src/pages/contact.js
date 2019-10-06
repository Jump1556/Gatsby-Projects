import React from "react"

// Use layout if you use same datablock for many pages
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Head title="Contact" />
      <Header />
      <h1>Contacts</h1>
      <h3>Telephone: 07308400312</h3>
      <h3>
        GitHub:{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          Jumper1556
        </a>
      </h3>
      <Footer />
    </div>
  )
}

export default ContactPage
