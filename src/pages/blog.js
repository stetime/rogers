import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />
export default BlogPage
