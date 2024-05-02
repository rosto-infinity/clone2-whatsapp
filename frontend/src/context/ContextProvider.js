import React, { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [actifuser, setActifuser] = useState('');
  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(user);
  }, []);

  return (
    <MyContext.Provider
      value={{ actifuser, setActifuser, user, messages, setMessages }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
