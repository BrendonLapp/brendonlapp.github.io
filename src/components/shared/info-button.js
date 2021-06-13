const SuccessButton = ({ message }) => {
  return (
    <>
      <button type="button" className="btn btn-outline-info">
        {message}
      </button>
    </>
  );
};

export default SuccessButton;
