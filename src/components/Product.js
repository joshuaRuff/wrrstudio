import React, { Component } from 'react'

class Product extends Component {
  
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_bhLgzBkskMnpxJHVld7OuL8g', {
      betas: ['checkout_beta_4'],
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
    const { id, currency, price, name, img } = this.props
    const priceFloat = (price/100).toFixed(2)
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency, }).format(priceFloat)
    console.log(img)
    return (
      <form onSubmit={this.handleSubmit(id)}>
        <img alt='' src={`../${img.url}.jpg`} className="responsive-image" />
        <h2 className="productName">{name} {formattedPrice}</h2>
        <button className="buyNow" type="submit">Buy Now!</button>
      </form>
    )
  }
}

export default Product;