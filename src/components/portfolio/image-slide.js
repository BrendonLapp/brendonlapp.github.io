const ImageSlide = ({ url, nextSlide, previousSlide }) => {
  return (
    <>
      <div>
        <div
          className={'carousel-button button-left'}
          onClick={() => previousSlide()}
        ></div>
        <div
          className={'carousel-button button-right'}
          onClick={() => nextSlide()}
        ></div>
      </div>

      <img
        src={url}
        alt={'Carousel'}
        width="100%"
        height="225"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      />
    </>
  );
};

export default ImageSlide;
