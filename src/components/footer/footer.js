import SocialLinks from '../shared/social-link';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark custom-footer">
      <div className="text-center p-3 text-white">
        Brendon.Lapp@gmail.com
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
