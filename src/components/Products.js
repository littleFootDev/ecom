import React from 'react';
import products from '../products.json';
import Product from './Product';

function Products() {
  return (
  <div>
      {products.map((product) => (
          <Product
          img={product.image}
          name={product.name}
          price={product.price}
          />
      ))}
  </div>
  );
}

export default Products;
