import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, image, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow">
        <Link to={`/item/${id}`} className="text-decoration-none text-dark">
          <img src={image} alt={title} className="card-img-top" style={{ width: '280px', height: '280px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
