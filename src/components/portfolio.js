import { useEffect, useState } from 'react';
import Card from '../components/portfolio/card';
import database from '../firebaseConfig';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      if (loading !== true) {
        const ref = database.collection('portfolio');
        const docs = await ref.get();
        let allData = [];
        docs.forEach((doc) => {
          const data = doc.data();
          allData.push(data);
        });
        setData(allData);
        setLoading(true);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, [data, loading]);
  return (
    <div className="album py-5">
      <div className="container" style={{ paddingTop: '2%' }}>
        <div className="row">
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <Card
                key={item.Name}
                name={item.Name}
                images={item.Images}
                link={item.Link}
                techs={item.Technology}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
