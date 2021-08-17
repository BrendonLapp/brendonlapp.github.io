import { useState } from 'react';
import NavItem from './nav-item';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavVisibility = () => {
    setIsVisible(!isVisible);

    if (isVisible === true) {
      document.getElementById('navbarNav').classList.remove('collapse');
    } else {
      document.getElementById('navbarNav').classList.add('collapse');
    }
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Brendon Lapp
        </a>
        <a
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleNavVisibility()}
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem
              link={'/'}
              name={'Home'}
              setVisibility={handleNavVisibility}
            />
            <NavItem
              link={'/Portfolio'}
              name={'Portfolio'}
              setVisibility={handleNavVisibility}
            />
            <NavItem
              link={'/About'}
              name={'About'}
              setVisibility={handleNavVisibility}
            />
            <NavItem
              link={'/Contact'}
              name={'Contact'}
              setVisibility={handleNavVisibility}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
