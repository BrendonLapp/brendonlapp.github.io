import ImageCarousel from './image-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Card = ({ images, name, link }) => {
  console.log(link);
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <a href="#" className="cardHover" style={{ textAlign: 'center' }}>
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
        </a>
      </div>
    </div>
  );
};

export default Card;
