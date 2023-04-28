import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className="category-image-container">
              <img
                src={
                  process.env.REACT_APP_STRAPI_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
                alt={item.attributes.title}
              />
              <div className="category-title">{item.attributes.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
