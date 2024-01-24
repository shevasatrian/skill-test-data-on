import React, {useState, createContext} from 'react';

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({children}) => {
  const initialData = [
    {id: 1, name: 'Beans R Us', city: 'Brisbane'},
    {id: 2, name: 'The Buzz', city: 'Munich'},
    {id: 3, name: 'Coffee Galore', city: 'Capelle aan den Ijssel'},
    {id: 4, name: 'Perk Plus', city: 'Salem'},
    {id: 5, name: 'Café Colombian', city: 'Hawthorne'},
    {id: 6, name: "Jumpin' Java", city: 'Sydney'},
    {id: 7, name: 'Coffee 2000', city: 'Munich'},
    {id: 8, name: 'The Whole Bean', city: 'Alton'},
    {id: 9, name: 'Roast Resellers', city: 'Vancouver'},
    // ... more items
  ];

  const [distributors, setDistributors] = useState(initialData);

  const addDistributor = (distributor) => {
    setDistributors([...distributors, {...distributor, id: Date.now()}]);
  };

  const updateDistributor = (id, updatedDistributor) => {
    setDistributors(
      distributors.map((dist) => (dist.id === id ? updatedDistributor : dist))
    );
  };

  const deleteDistributor = (id) => {
    setDistributors(distributors.filter((dist) => dist.id !== id));
  };

  return (
    <GlobalDataContext.Provider
      value={{
        distributors,
        addDistributor,
        updateDistributor,
        deleteDistributor,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};
