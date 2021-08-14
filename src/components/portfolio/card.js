import ImageCarousel from './image-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Card = ({ images, name, link }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div
          unselectable="on"
          className="cardHover"
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <ImageCarousel images={images} />
          <a
            href={link}
            className="text-decoration-none text-dark"
            style={{ textAlign: 'left' }}
          >
            <div className="card-body">
              <p className="card-text">{name}</p>
              <p className="textHover">
                View Repository <FontAwesomeIcon icon={faLink} />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
