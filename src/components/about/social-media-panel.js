import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProfileLink from './profile-link';

const SocialMediaPanel = () => {
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush">
        <ProfileLink
          link={'https://github.com/BrendonLapp'}
          color="black"
          icon={faGithub}
          name={'GitHub'}
          userName={'BrendonLapp'}
        />
        <ProfileLink
          link={'https://www.linkedin.com/in/brendon-lapp/'}
          color="#0072b1"
          icon={faLinkedin}
          name={'LinkedIn'}
          userName={'Brendon Lapp'}
        />
      </ul>
    </div>
  );
};

export default SocialMediaPanel;
