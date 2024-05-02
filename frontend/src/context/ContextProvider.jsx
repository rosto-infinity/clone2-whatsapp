import  { createContext, useContext, useState } from 'react';

const MyContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [actifuser, setActifuser] = useState('');
  


  return (
    <MyContext.Provider
      value={{ actifuser, setActifuser}}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
