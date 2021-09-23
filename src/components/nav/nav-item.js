import { Link } from 'react-router-dom';

const NavItem = ({ link, name, setVisibility }) => {
  const toggleVisibility = () => {
    setVisibility();
  };

  return (
    <li className="nav-item indent" onClick={() => toggleVisibility()}>
      <Link className="nav-link active" to={link}>
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
