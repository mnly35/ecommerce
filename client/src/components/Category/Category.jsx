import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Products from '../Products/Products';
import './Category.scss';

const Category = () => {

  //   Get the category id - Use useParams() to get the id parameter from the URL.
  const{id}=useParams(); /*we are using useParams() hook for to get {id} parameter from the URL.
                          In this example, the id variable holds the id parameter that is retrieved using the useParams() hook. 
                          This parameter determines which category page the user wants to access. 
                          The URL for the category page could look like this: /categories/:id. 
                          When a user visits this URL, 
                          the useParams() hook retrieves the id parameter, and the category page is rendered based on this id.
                          This approach is very useful for creating dynamic URLs.
                           For example, when creating a URL for a category page, a unique id parameter can be used for each category. 
                        This way, instead of defining separate routes for each category page, a single route can be defined,
                        and different category pages can be rendered using the id parameter.*/


  // Fetch data - Use useFetch() to fetch data from the API, passing in the URL with the id parameter.
  const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]= ${id}`)//This line uses the useFetch() hook to fetch data from an API,
                                                                              // passing in the URL with the id parameter.

  // Extract the category title - Extract the category title from the fetched data using object
  //   destructuring and optional chaining, and store it in the categoryTitle variable.
  const categoryTitle = {
    title: data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title
  };
  /*In this example, data is the response data that is fetched from the API using the useFetch() hook.
                                                                The optional chaining operator (?.) is used to avoid errors in case the category or title properties are undefined.
                                                                If either of these properties is undefined, the categoryTitle variable will be assigned the value of undefined. */
  


  // Render the component - Render the component by returning JSX with the category title and
  //  a Products component that displays the fetched data.
  
  return (
    <div className='category-main-content'>
      <h1 className='category-title'>{categoryTitle}</h1>
      <Products className="products-container" innerPage={true} products={data} />
    </div>
  );//line 39 a inner page ekle
};

export default Category;
//"?." is optional chanining.The optional chaining operator (?.) is used to avoid errors in case the category or title properties are undefined.