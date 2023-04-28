import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
 
  
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
              <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Nulla vitae justo eget massa mattis pharetra. Aliquam erat volutpat.
              <br></br>
              Sed ornare ultricies nunc, non tempor massa ultricies vitae.
              <br></br>Aenean in massa vel justo bibendum blandit
              </div>
               </div>
              <div className="col" >
             <div className="title">Contact</div>
              <div className="text"><FaLocationArrow /> 123 King St. Toronto, Ontario, Canada</div>   
              <div className="text">  <FaMobileAlt />+1 (437) 734 4437</div>
               <div className="text">  <FaEnvelope />  info@magnolia.com</div>
              <div className="c-item"> 
               </div>
              </div>  
              <div className="col" >
              <div className="title">Categories</div>
              <span className="text">Masks</span>
              <span className="text">Skin Care</span>
              <span className="text">Perfumes</span>
              </div>
        
              <div className="col" >
              <div className="title">Pages</div>
              <span className="text">Home</span>
              <span className="text">About</span>
              <span className="text">Contact Us</span>
              </div>

              
              <div className="footer">
              <div className="bottom-bar">
            <img src={Payment} alt="Accepted payment methods" /></div>
              <div className="bottom-bar-content"> </div> 
              <div className="text">2023 Ecommerce </div>
             </div>
          </div>
        </div>
             
                
      
    );
  };


export default Footer;
{
  /*// Define a column for the About section

// Define a column for the Contact section

  // Define a contact item with an icon and corresponding text

  // Define another contact item with an icon and corresponding text

  // Define another contact item with an icon and corresponding text

// Define a column for the Skin Care section

// Define a column for the Pages section

// Define the bottom bar for the footer

  // Define a text element for the bottom bar

  // Define an image element for the bottom bar */
}
//<FaLocationArrow/>   <FaMobileAlt /> <FaEnvelope /> are a React component.
//This component represents an icon from the FontAwesome library, which is one of the React icon libraries.
//This particular icon depicts an arrow pointing in one direction and is commonly used as a location marker.
// The FontAwesome library provides a collection of icons that can be easily used in React projects.
//Payment is using for icons which are represant the payment method icons.
//"payments.png" file is ;
/*PNG stands for "Portable Network Graphics." It is a type of digital image file that is commonly used for graphics and web design.
 Unlike other image file formats, such as JPEG or GIF, PNG files support transparency, 
which means that the background of an image can be removed and replaced with another color or image.
 PNG files are also capable of supporting high-quality images with detailed graphics and crisp text. */
