import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    
    <Layout location={location} title={siteTitle}> 
      
         <div class='late'>
      <span class='late-intro'></span>
      
    <marquee scrollamount='3'>
        This is a space for music. 
        This is a space for feeling. 
        This is a space for the unfiltered.
    </marquee>
        </div>
      
      
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article class='post-preview' key={node.fields.slug}>
            <header>
              <div class='date'>{node.frontmatter.date}</div>
              <h3 class='article-title'>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}

    <footer>
        footer loool 
    </footer>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
