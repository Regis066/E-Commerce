import React, { Fragment } from 'react';
import { Product, Footer , FooterBanner , HeroBanner, Layout, Cart, Navbar } from '@/components';

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />


      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='product-container'>
      {['Product 1', 'Product 2'].map((product)=> product)}
      </div>

     <FooterBanner />
    </Fragment>
  )
}

export default Home
