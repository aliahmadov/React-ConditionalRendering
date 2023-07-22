import React, { Component } from 'react'
import "../ListProduct/ListProduct.css"
import Product from '../Product/Product'

export default class ListProduct extends Component {
  render() {
    return (
      <div className='prodList'>
        <Product prod={this.props.prods.product1}></Product>
        <Product prod={this.props.prods.product2}></Product>
        <Product prod={this.props.prods.product3}></Product>
      </div>
    )
  }
}
