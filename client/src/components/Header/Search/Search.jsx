import React, { useState, useMemo } from 'react';
import { MdClose } from 'react-icons/md';
import './Search.scss';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const url = useMemo(() => {
    return `/api/products?populate=*&filters[title][$contains]=${query}`;
  }, [query]);

  const { data } = useFetch(url);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleItemClick = (item) => {
    navigate(`/product/${item.id}`);
    setSearchModal(false);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={handleInputChange}
        />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        {!data?.data?.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {data?.data?.map(({ id, attributes }) => (
            <div
              className="search-result-item"
              key={id}
              onClick={() => handleItemClick({ id, attributes })}
            >
              <div className="image-container">
                <img
                  src={`${process.env.REACT_APP_STRIPE_APP_DEV_URL}${attributes.image.data[0].attributes.url}`}
                  alt={attributes.title}
                />
              </div>
              <div className="prod-details">
                <span className="name">{attributes.title}</span>
                <span className="desc">{attributes.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
