import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back home</Link>
      </p>
    </Layout>
  )
}
