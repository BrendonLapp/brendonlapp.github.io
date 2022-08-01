import KnowledgeBox from './about/knowledge-box';
import EducationBox from './about/education-box';
import AboutMePanel from './about/about-me-panel';
import SocialMediaPanel from './about/social-media-panel';
import MyInfoPanel from './about/my-info-panel';

const About = () => {
  return (
    <div className="album py-5">
      <div className="container py-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <MyInfoPanel />
            </div>
            <SocialMediaPanel />
          </div>
          <div className="col-md-8">
            <AboutMePanel />
            <div className="row gutters-sm">
              <div style={{ width: '100%' }}>
                <div className="card h-auto my-3">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3 text-secondary">
                      Languages and Technology
                    </h6>
                    <KnowledgeBox />
                  </div>
                </div>
                <div className="card h-auto">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3 text-secondary">
                      Education
                    </h6>
                    <EducationBox
                      name={
                        'Bachelor of Applied Information Systems Technology - Information Systems — Graduated April 2022'
                      }
                      link={
                        'https://www.nait.ca/programs/baist-information-systems?term=2021-fall'
                      }
                    />
                    <EducationBox
                      name={
                        'Digital Media and IT - Computer Software Development — Graduated April 2019'
                      }
                      link={
                        'https://www.nait.ca/programs/dmit-computer-software-development?term=2021-fall'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
