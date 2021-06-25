const MessageBox = ({}) => {
  return (
    <div className="mb-3">
      <label for={'message'}>
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
      />
    </div>
  );
};

export default MessageBox;
