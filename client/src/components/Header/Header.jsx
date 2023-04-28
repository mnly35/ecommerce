import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import './Header.scss';
import Search from './Search/Search';
import { Context } from '../../utils/context';
import Cart from '../Cart/Cart';

const Header = () => {
  // Use the useState hook to define two state variables: "scrolled" and "searchModal".
  const [scrolled, setScrolled] = useState(false);//scrolled and searchModal are state variables initialized using the useState hook. 
                                                   //navigate is a hook from react-router-dom used for programmatic navigation.
  const [searchModal, setSearchModal] = useState(false);
  
  // Use the useNavigate hook to define the "navigate" function.
  const navigate = useNavigate();
  
  // Define a function named "handleScroll" that sets the value of "scrolled" based on the window scroll position using the useState hook.
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  // Use the useEffect hook to add a scroll event listener to the window and call the "handleScroll" function.
  //The useEffect hook adds a scroll event listener to the window object when the component
  //mounts, which calls the handleScroll function. The empty array [] ensures that the effect only
  //runs once, on mount.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);}, [])
 

  // Use the useContext hook to define "cartCount", "showCart", and "setShowCart" variables.
  //The useContext hook is used to access the global state, which includes cartCount, showCart,
//and the setShowCart function.
  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className='header-content'>
        <div className='center'>MAGNOLIA</div>
        <ul className="left">{/*These elements use the onClick event handler to navigate to the specified routes using the
navigate function from react-router-dom. */}
<li  onClick={() => navigate('/')}>Home</li>
<li onClick={() => navigate('/about')}>About</li>
</ul>
  <div className='right'  >      
<TbSearch   onClick={() => setSearchModal (true)} />
<span  className="cart-icon" onClick={() => setShowCart(true)}>
<CgShoppingCart  />
{!!cartCount && <span>{cartCount}</span>}
</span>
{searchModal && <Search setSearchModal={setSearchModal} />}
{showCart && <Cart />}
  <span>   <AiOutlineHeart />  </span>
      </div></div> 
    </header>
  );
};

export default Header;
