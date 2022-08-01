import { Route } from 'react-router-dom';
import Portfolio from '../portfolio';

const AboutMePanel = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0 text-secondary">About</h6>
          </div>
          <div>
            Hi, I’m Brendon Lapp and I am a Software Developer at LawDepot where
            I have been working since October 2021. While at LawDepot I have
            been working with C#, Microsoft SQL, TypeScript, and Vue JS to
            create internal tools and maintain the live website. I have excelled
            at working with these technologies and expanding upon my knowledge
            in the software development world. Previously, I have worked at Neo
            Financial where I used MongoDB, TypeScript, and React JS to create
            internal tools for the developers to use. At NAIT I learned the
            foundations for software development with C#, Microsoft SQL and the
            development for websites and the mobile world. I hope that you take
            interest in some of the projects I have worked on in my{' '}
            <a href="/portfolio">portfolio</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePanel;
