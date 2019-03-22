import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

class Product extends Component {
  
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_bhLgzBkskMnpxJHVld7OuL8g', {
      betas: ['checkout_beta_4'],
      billing_address_collection: 'requried'
    })
  }

  handleSubmit(sku) {
    return event => {
      event.preventDefault();

      this.stripe.redirectToCheckout({
        items: [{ sku, quantity: 1 }],
        successUrl: `http://localhost:8000/about`,
        cancelUrl: `http://localhost:8000/blog`,
      })
      .then(result => {
        if(result.error) {
          console.error(result.error.message);
        }
      })
    }
  }

  render() {
    const { id, currency, price, name } = this.props
    console.log(currency);
    const priceFloat = (price/100).toFixed(2)
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency, }).format(priceFloat)
    
    return (
      <form onSubmit={this.handleSubmit(id)}>
        <h2>{name} {formattedPrice}</h2>
        <button type="submit">Buy Now!</button>
      </form>
    )
  }
}

export default () => (
  <StaticQuery
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
      <Layout>
        <div className="store">
          <h1>Store coming soon...</h1>
        </div>
        {/* {data.allStripeSku.edges.map(({ node: sku }) => (
          <Product
            id={sku.id}
            currency={sku.currency}
            price={sku.price}
            name={sku.attributes.name}
          />
        ))} */}
      </Layout>
    )}
  />
);