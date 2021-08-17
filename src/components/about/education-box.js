import NAITLogo from '../../images/NAIT_Logo.png';

const EducationBox = ({ name, link }) => {
  return (
    <div>
      {name}
      <a href={link}>
        <img src={NAITLogo} style={{ width: '2rem', paddingLeft: '1rem' }} />
      </a>
    </div>
  );
};

export default EducationBox;
