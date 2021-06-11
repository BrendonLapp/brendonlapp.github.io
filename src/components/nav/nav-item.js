import { Link } from 'react-router-dom';

const NavItem = ({ link, name }) => {
  return (
    <li class="nav-item">
      <Link className="nav-link active" to={link}>
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
