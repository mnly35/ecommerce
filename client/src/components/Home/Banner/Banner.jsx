import React from 'react';
import './Banner.scss';
import bannerImg from '../../../assets/banner-img.png';

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>No. 1</h1>
          <p>
            We are one of the top wholesalers of cosmetics and we are proud to
            continue to help our customers with top quality services and
            products.
          </p>
          <div className="ctas">
            <a href="/about" className="banner-cta">
              Read More
            </a>
            <a href="/categories" className="banner-cta v2">
              Shop Now
            </a>
          </div>
        </div>
        <img className="banner-img" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
