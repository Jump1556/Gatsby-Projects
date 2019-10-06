import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I am Asya living in Stockholm.</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      {/* Use Link component to load instantly, you should not reload a page
          Use anchor if you link external page */}
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
