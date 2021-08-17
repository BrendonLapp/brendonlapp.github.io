import MyImage from '../../images/Brendon.jpg';

const MyInfoPanel = () => {
  return (
    <div className="card-body">
      <div className="d-flex flex-column align-items-center text-center">
        <img
          src={MyImage}
          alt="Brendon"
          className="rounded-circle"
          width="150"
        />
        <div className="mt-3">
          <h4>Brendon Lapp</h4>
          <p className="text-secondary mb-1">Software Developer</p>
          <p className="text-muted font-size-sm">Edmonton, Alberta, Canada</p>
          <a href="/Contact" className="btn btn-outline-primary">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfoPanel;
