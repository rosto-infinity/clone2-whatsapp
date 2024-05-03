
import { createContext, useContext, useEffect, useState } from 'react';

// Création du contexte
const MyContext = createContext({});

// Création du provider
export const ContextProvider = ({ children }) => {
  // State pour l'utilisateur actif
  const [actifUser, setActifUser] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user" || "{}"));
    setUser(user);
   }, []);
  // Renvoyer le contexte avec les enfants
  return (
    <MyContext.Provider value={{messages, user, setMessages,  actifUser, setActifUser}}>
      {children}
    </MyContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMyContext = () => {
  return useContext(MyContext);
};
