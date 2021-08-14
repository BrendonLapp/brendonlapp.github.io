import { useEffect, useState } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProfileLink from './about/profile-link';
import KnowledgeBox from './about/knowledge-box';
import MyImage from '../images/Brendon.jpg';
import NAITLogo from '../images/NAIT_Logo.png';

const About = () => {
  return (
    <div className="album py-5">
      <div className="container py-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={MyImage}
                    alt="Brendon"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>Brendon Lapp</h4>
                    <p className="text-secondary mb-1">Software Developer</p>
                    <p className="text-muted font-size-sm">
                      Edmonton, Alberta, Canada
                    </p>
                    <a href="/Contact" className="btn btn-outline-primary">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">About</h6>
                  </div>
                  <div>Some stuff about me</div>
                </div>
              </div>
            </div>

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
                    <div>
                      Bachelor of Applied Information Systems Technology -
                      Information Systems - Expected Graduation April 2022
                      <a href="https://www.nait.ca/programs/baist-information-systems?term=2021-fall">
                        <img
                          src={NAITLogo}
                          style={{ width: '2rem', paddingLeft: '1rem' }}
                        />
                      </a>
                    </div>
                    <div>
                      Digital Media and IT Computer Software Development -
                      Graduated April 2019
                      <a href="https://www.nait.ca/programs/dmit-computer-software-development?term=2021-fall">
                        <img
                          src={NAITLogo}
                          style={{ width: '2rem', paddingLeft: '1rem' }}
                        />
                      </a>
                    </div>
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
