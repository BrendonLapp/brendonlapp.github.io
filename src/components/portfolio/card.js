import ImageCarousel from './image-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import TechnologyDisplay from './technology-display';

const Card = ({ images, name, link, techs }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm card-height">
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
              <p className="card-text bold-text">{name}</p>
              <p className="textHover">
                View Repository <FontAwesomeIcon icon={faLink} />
              </p>
              <div>
                {techs.map((technology) => (
                  <TechnologyDisplay key={technology} tech={technology} />
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
