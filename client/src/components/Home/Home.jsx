import React, { useEffect, useContext } from 'react';
import './Home.scss';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  // Destructure the products and categories and setProducts and setCategories from useContext.
 const {products,setProducts,categories,setCategories}=useContext(Context);

  // Use useEffect hook to fetch products and categories data from an API when the component mounts.
    // Create a function named getProducts that uses fetchDataFromApi function to
    // fetch products data from an API, and then set the products state with the response.
     // Create a function named getCategories that uses fetchDataFromApi function to fetch
    //  categories data from an API, and then set the categories state with the response.
useEffect(()=>{
  const getProducts = async () => {
    try {
      const data = await fetchDataFromApi('products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getCategories = async () => {
    try {
      const data = await fetchDataFromApi('categories');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  getProducts();
  getCategories();
}, []);

  //getProducts() and getCategories() are functions that are defined inside the useFetch hook. They are returned by the hook as an object and assigned to the getProducts and getCategories variables.
//We use these functions to call the API and update the state of the products and categories in 
//the Home component. By calling these functions inside the useEffect hook, we ensure that the API is called only once, 
//when the component mounts, and the state is updated accordingly.
  
  return (
     <div> 
      {/* 
      // Inside the return statement, return a div that contains a Banner
      component and a div with a class named "main-content". 
      // Inside the "main-content" div, create another div with a class named "layout". 
      // Pass the categories state as props to the Category component. 
      // Pass the products state as props to the Products component along with a string as
      the headingText prop. 
      */}
      <Banner/> 
<div className='main-content'>

  <div className='layout'>
    <Category categories={categories}/>
    <Products products={products} headingText={"Our Popular Products"}/>
  </div>
</div>
    </div>
  );
};

export default Home;
 