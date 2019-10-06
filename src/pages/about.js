import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>My name is Anastasiia. I am full-stack developer.</p>
      <p>I live in a best place in the world. And I have best husband!</p>
      <p>
        Want to contact me?{" "}
        <Link to="/contact">Click to get contact information</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
