import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileLink = ({ link, color, icon, name, userName }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <a href={link} style={{ textDecoration: 'none', color: 'black' }}>
        <h6 className="mb-0">
          <span
            style={{
              color: color,
              fontSize: '1.5rem',
              paddingRight: '1rem',
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
          {name}
        </h6>
      </a>
      <span className="text-secondary">{userName}</span>
    </li>
  );
};

export default ProfileLink;
