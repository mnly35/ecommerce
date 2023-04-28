import { useContext, useState } from 'react';
import { Context } from '../../utils/context';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { FaCartPlus } from 'react-icons/fa';
import './SingleProduct.scss';

const SingleProduct = () => {
  // Define the state for quantity and set the default value to 1 using useState hook.
  const {quantity,setQuantity}=useState(1);
  // Use the useParams hook to extract the id parameter from the URL.
  const{id}=useParams();

  // Use the useContext hook to extract the handleAddToCart function from the Context.
  const {handleAddToCart}=useContext(Context);
  // Use the useFetch hook to fetch the data for the product using the API URL and the extracted id.
const{data}=useFetch(`/api/products/${id}`)
  // Create two functions decrement and increment to decrease or increase the quantity respectively.
  // Use the setQuantity method from useState to update the quantity.
  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
  //Here, the initial value of the quantity variable is set to 1, and when the decrement function is called,
  // the value of the quantity variable is not less than 1, so the value is decreased by 1 to 0 and then set back to 1. 
  //Therefore, even if the function is called, the value of the quantity variable always remains 1.
 

  const increment = () => {
    setQuantity(quantity + 1);
  };

  // Check if the data is available, if not then return null or an empty value.
  if ( !data) {
    return null;
  }

  // Extract the product attributes from the fetched data and store them in a variable named "product".
const product=data;
  return (
    <div className="single-product-main-content">
  <div className="layout">
    <div className="single-product-page">
      <div className="left">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="right">
        <h1 className="name">{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="desc">{product.description}</p>
        <div className="cart-buttons">
          <div className="quantity-buttons">
            <span onClick={decrement}>-</span>
            <span>{quantity}</span>
            <span onClick={increment}>+</span>
          
          <button className="add-to-cart-button"onClick={() => handleAddToCart(product.id, quantity)}>
            <FaCartPlus /> Add to cart
          </button></div>
        </div>
        <div className="divider" />
        <div className="info-item">
          <span className="text-bold">Category: </span>
           <RelatedProducts category={product.category} />
            <span>{product.category.name}</span>
         
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default SingleProduct;
                 
{/*   Render the component with the HTML elements and attributes needed to display the product details
like name, price, description, image, and category.
Create an "Add to cart" button that calls the handleAddToCart function with the current product and quantity
when clicked. Also, set the quantity back to 1.
Render the component with the RelatedProducts component and pass the required props like productId and categoryId. 
*/}