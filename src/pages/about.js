import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h1>About me</h1>
      <p>
        I'm the proud owner of this site lads, i built it with fucking gatsby!
      </p>
    </Layout>
  )
}

export const Head = () => <title>Rogers Nelson</title>

export default AboutPage
