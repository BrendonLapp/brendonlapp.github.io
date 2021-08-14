import NavItem from './nav-item';

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Brendon Lapp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem link={'/'} name={'Home'} />
            <NavItem link={'/Portfolio'} name={'Portfolio'} />
            <NavItem link={'/About'} name={'About'} />
            <NavItem link={'/Contact'} name={'Contact'} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
