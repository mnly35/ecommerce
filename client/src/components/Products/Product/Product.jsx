import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ data, id }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="thumbnail">
        <img
          src={`${process.env.REACT_APP_STRIPE_APP_DEV_URL}${data.image.data[0].attributes.url}`}
          alt={`${data.title}`}
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">CA&#x24;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
