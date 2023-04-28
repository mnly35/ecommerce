import React, { useContext } from 'react';
import { Context } from '../../../utils/context';
import { MdClose } from 'react-icons/md';
import './CartItem.scss';

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  const handleQuantityChange = (action, item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (index !== -1) {
      const updatedItem = { ...updatedCartItems[index] };
      updatedItem.attributes.quantity =
        action === 'inc'
          ? updatedItem.attributes.quantity + 1
          : updatedItem.attributes.quantity - 1;
      if (updatedItem.attributes.quantity === 0) {
        updatedCartItems.splice(index, 1);
      } else {
        updatedCartItems[index] = updatedItem;
      }
      handleCartProductQuantity(updatedCartItems);
    }
  };

  const renderCartItem = (item) => {
    return (
      <div className="search-result-item" key={item.id} onClick={() => {}}>
        <div className="image-container">
          <img
            src={`${process.env.REACT_APP_STRAPI_APP_DEV_URL}${item.attributes.image.data[0].attributes.url}`}
          />
        </div>
        <div className="prod-details">
          <span className="name">{item.attributes.title}</span>
          <MdClose
            className="close-btn"
            onClick={() => handleRemoveFromCart(item)}
          />
          <div className="quantity-buttons">
            <span onClick={() => handleQuantityChange('dec', item)}>-</span>
            <span>{item.attributes.quantity}</span>
            <span onClick={() => handleQuantityChange('inc', item)}>+</span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}x</span>
            <span className="highlight">
              <span>CA&#x24; </span>
              {item.attributes.price * item.attributes.quantity}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return <div className="cart-products">{cartItems?.map(renderCartItem)}</div>;
};

export default CartItem;
