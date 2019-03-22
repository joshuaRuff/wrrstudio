import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Product from '../components/Product'


export const ProductTemplate = ({ description, title, images }) => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h2 style={{textAlign: 'center'}}>Store coming soon...</h2>
          <p>{description}</p>
          {/* <StaticQuery
            query={graphql`
              {
                allStripeSku {
                  edges {
                    node {
                      id
                      currency
                      price
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <div className="grid">
                {data.allStripeSku.edges.map(({ node: sku }, key) => (
                  <div className="cell"key={key}>
                    <Product
                      img={images[key]}
                      id={sku.id}
                      currency={sku.currency}
                      price={sku.price}
                      name={sku.attributes.name}
                    />
                  </div>
                ))}
              </div>
            )}
          /> */}
        </div>
      </div>
    </div>
  </section>
)

ProductTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const Products = ({ data }) => {
  const { markdownRemark: product } = data
  console.log(product)
  return (
    <Layout mdData={data}>
      <ProductTemplate
        description={product.frontmatter.description}
        title={product.frontmatter.title}
        images={product.frontmatter.products.images}
      />
    </Layout>
  )
}

Products.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Products

export const pageQuery = graphql`
  query ProductTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
      frontmatter {
        meta_title
        meta_description
        title
        description
        products {
          images {
            url
          }
        }
      }
    }
  }
`;