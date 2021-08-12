const SuccessButton = ({ message, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btn btn-success">
        {message}
      </button>
    </>
  );
};

export default SuccessButton;
