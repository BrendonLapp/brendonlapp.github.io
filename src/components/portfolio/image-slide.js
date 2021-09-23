import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const ImageSlide = ({ url, nextSlide, previousSlide }) => {
  return (
    <div>
      <div>
        <div
          className={'carousel-button button-left'}
          onClick={() => previousSlide()}
        >
          <AiFillCaretLeft className="arrow arrow-left" />
        </div>
        <div
          className={'carousel-button button-right'}
          onClick={() => nextSlide()}
        >
          <AiFillCaretRight className="arrow arrow-right" />
        </div>
      </div>

      <img
        src={url}
        alt={'Carousel'}
        width="100%"
        height="225"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      />
    </div>
  );
};

export default ImageSlide;
