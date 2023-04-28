import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Products from '../../Products/Products';
import './RelatedProducts.scss';

const RelatedProducts = ({ categoryId, productId }) => {
  const query = `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`;
  const { data } = useFetch(query);

  return (
    <div className="related-products-container">
      <h2 className="related-products-heading">Related Products</h2>
      <Products products={data} />
    </div>
  );
};

export default RelatedProducts;
