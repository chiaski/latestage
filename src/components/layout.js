import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
    <div id='site-header' class='front'>
        
      <h1
        style={{
          marginTop: 0,
        }}
      >
        <Link>
          {title}
        </Link>
      </h1>
        </div>

    )
  } else {
    header = (
    <div id='site-header'>
      <h3> 
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
        </div>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        width: `80vw`,
        maxWidth: `800px`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Chia
      </footer>
    </div>
  )
}

export default Layout
