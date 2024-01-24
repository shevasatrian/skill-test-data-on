import React, {useContext} from 'react';
import {GlobalDataContext} from '../context/GlobalDataProvider'; // Import the context
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DistributorsList = () => {
    const {distributors} = useContext(GlobalDataContext); // Use useContext hook
    const add = '[add]';
    const edit = '[edit]';

  return (
    <>
    <Header />
      <div className="m-4 py-4">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row w-full">
          <div className="w-1/3 font-bold">Distributor Name</div>
          <div className="w-1/3 font-bold">City</div>
        </div>
        {distributors.map((distributor) => (
          <div key={distributor.id} className="flex flex-row w-full">
            <div className="w-1/3">{distributor.name}</div>
            <div className="w-1/3">{distributor.city}</div>
            <Link to={`/edit/${distributor.id}`}>{edit}</Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/add">{add}</Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DistributorsList;
