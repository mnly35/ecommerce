import './Products.scss';
import Product from './Product/Product';

const Products = ({ products, innerPage, headingText }) => {
  const renderProducts = () => {
    return products?.data?.map((item) => (
      <Product key={item.id} id={item.id} data={item.attributes} />
    ));
  };

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className={`products ${innerPage ? 'innerPage' : ''}`}>
        {renderProducts()}
      </div>
    </div>
  );
};

export default Products;
