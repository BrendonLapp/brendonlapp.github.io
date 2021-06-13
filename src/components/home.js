import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">Brendon Lapp</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white mb-5">Software Developer</p>
            <Link className="btn btn-outline-info" to="/portfolio">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
