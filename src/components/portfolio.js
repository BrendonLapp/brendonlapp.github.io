import { useEffect, useState } from 'react';
import Card from '../components/portfolio/card';
import database from '../firebaseConfig';

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const ref = database.collection('portfolio');
      const docs = await ref.get();
      let allData = [];
      docs.forEach((doc) => {
        const data = doc.data();
        allData.push(data);
      });
      setData(allData);
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  console.log(data);
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <Card
                key={item.Name}
                name={item.name}
                description={item.Description}
                images={item.Images}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
