import { useEffect } from 'react';

const Card = ({ images, description, name }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <a href="#" className="cardHover">
          {/* <img
            className="card-img-top"
            src={item.Images.Image1}
            alt="Card cap"
          /> */}
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
