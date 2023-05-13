import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      Hello Banner


      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='product-container'>
      {['Product 1', 'Product 2'].map((product)=> product)}
      </div>

      Footer
    </Fragment>
  )
}

export default Home
