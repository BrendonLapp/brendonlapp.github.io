import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/brendon-lapp/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/BrendonLapp">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialLinks;
