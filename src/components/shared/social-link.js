import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/brendon-lapp/"
        className="fs-3 text-white p-2"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/BrendonLapp" className="fs-3 text-white p-2">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialLinks;
