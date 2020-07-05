import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import rehypeReact from 'rehype-react'
import Case from '../components/case'
import Callout from '../components/callout'
import Panel from '../components/panel'
import Button from '../components/button'
import Map from '../components/map'
import Head from '../components/head'
import Media from '../components/media'
import Header from '../components/article/header'
import Body from '../components/article/body'
import Footer from '../components/article/footer'
import { PageTemplateQuery } from '../../types/graphql-types'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    case: Case,
    callout: Callout,
    panel: Panel,
    button: Button,
    media: Media,
  },
}).Compiler


type Props = {
  data: PageTemplateQuery
}

const Component: React.FC<Props> = ({
    data: {
      markdownRemark: {
        htmlAst,
        fields: { slug },
        frontmatter: {
          title,
          category,
          lead,
          tags
        },
        tableOfContents
      }
    }
  }) => {
  const categoryName = slug.match(/covid-19/)
    ? `COVID-19 Support`
    : slug.match(/proposals/)
    ? 'Proposals'
    : category === null
    ? 'Services'
    : category

  return (
    <Layout>
      <Head title={title} description={lead} keywords={tags} />
      <Container>
        <Header titleName={categoryName} title={title} descName="Intro" desc={lead} />
        {slug === '/office' && <Map>しおかぜ事務所</Map>}
        <Body>
          <TableOfContents>
            <p className="title">目次</p>
            <div className="body" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </TableOfContents>
          {renderAst(htmlAst)}
        </Body>
        <Footer tags={tags} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PageTemplate($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        category
        lead
        tags
      }
      tableOfContents
    }
  }
`

const Container = styled.article`
  margin: 0 0 3rem;
`
const TableOfContents = styled.nav`
  grid-column: 3 / 3;
  color: #ddd;
  margin: 2rem 0 0;
  padding: 0;
  .title {
    color: #666;
    font-size: 1.5rem;
    padding: 0 0 1rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    padding: 0 0 .5rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1rem;
  }
  ul ul {
    padding-left: 1rem;
  }
  li {
    padding: 0 0 .5rem;
  }
  @media screen and (max-width:480px) {
    display: none;
  }
`

export default Component
