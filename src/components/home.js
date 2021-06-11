import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">Brendon Lapp</h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white mb-5">Software Developer</p>
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
