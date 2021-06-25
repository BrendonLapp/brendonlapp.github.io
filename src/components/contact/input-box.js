const InputBox = ({ name, id, placeholder, type }) => {
  return (
    <div className="mb-3">
      <label for="email">
        {name} <span className="text-muted"></span>
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <div className="invalid-feedback">Please enter a valid {name}.</div>
    </div>
  );
};

export default InputBox;
