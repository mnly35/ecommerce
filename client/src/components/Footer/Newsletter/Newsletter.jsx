import React from 'react';
import './Newsletter.scss';

const Newsletter = () => (
  <div className="newsletter-section">
    <div className="newsletter-content">
      <span className="small-text">Newsletter</span>
      <h2 className="big-text">Sign up for latest updates and offers</h2>
      <form className="form">
        <input type="email" placeholder="Email Address" required />
        <button type="submit">Subscribe</button>
      </form>
      <p className="text">Will be used in accordance with our Privacy Policy</p>
    </div>
  </div>
);

export default Newsletter;
