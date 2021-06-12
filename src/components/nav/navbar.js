import NavItem from './nav-item';

const Navbar = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Brendon Lapp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
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
