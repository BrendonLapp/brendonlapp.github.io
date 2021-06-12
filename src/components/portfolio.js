import { useEffect } from 'react';
import Card from '../components/portfolio/card';

const Portfolio = ({ name }) => {
  useEffect(() => {
    console.log('component loaded');
    const data = getPortfolio;
    console.log(data);
  }, []);
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <Card />
          {/* Map cards into place */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
