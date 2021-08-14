const MessageBox = ({ setValue }) => {
  const handleOnChange = (event) => {
    setValue(event);
  };

  return (
    <div className="mb-3">
      <label htmlFor={'message'}>
        Message <span className="text-muted"></span>
      </label>
      <textarea
        type="text"
        className="form-control"
        id="message"
        placeholder="Your message here"
        rows="10"
        maxLength="1000"
        style={{ resize: 'none' }}
        onChange={(event) => handleOnChange(event.target.value)}
      />
    </div>
  );
};

export default MessageBox;
