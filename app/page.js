import React, { Fragment } from 'react';
import { Product, Footer , FooterBanner , HeroBanner, Layout, Cart, Navbar } from '@/components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => (

  <div>
  <HeroBanner heroBanner/>
  {console.log(bannerData)}

  <div className='products-heading'>
    <h2>Beset Selling Products</h2>
    <p>Speakers of many variations</p>
  </div>

  <div className='product-container'>
  {products && products.map((product)=> product)}
  {console.log(bannerData)}
  </div>

 <FooterBanner />
</div>

);
  export const getServerSideProps = async() =>{
      const query = `*[_type == 'product']`;
      const products = await client.fetch(query);

      const bannerQuery = `*[_type == 'banner']`;
      const bannerData = await client.fetch(bannerQuery);

      return {
        props : {products , bannerData}
      }
  }

export default Home
