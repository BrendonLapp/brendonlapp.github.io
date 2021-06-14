import ImageCarousel from './image-carousel';

const Card = ({ images, name }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <a href="#" className="cardHover">
          <ImageCarousel images={images} />
          <div className="card-body">
            <p className="card-text">{name}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
