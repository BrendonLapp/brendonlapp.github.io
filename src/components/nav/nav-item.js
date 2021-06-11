const NavItem = ({ link, name }) => {
  return (
    <li class="nav-item">
      <a class="nav-link active" href={link}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
