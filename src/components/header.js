import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header className={headerStyles.header}>
        <h2>
          {/* Can be logo or anything */}
          <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
        </h2>
        <nav className={headerStyles.nav}>
          <Link className={headerStyles.link} activeClassName={headerStyles.activeItem} to="/">Home</Link>
          <Link className={headerStyles.link} activeClassName={headerStyles.activeItem} to="/contact">Contact</Link>
          <Link className={headerStyles.link} activeClassName={headerStyles.activeItem} to="/about">About me</Link>
          <Link className={headerStyles.link} activeClassName={headerStyles.activeItem} to="/blog">Blog</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header