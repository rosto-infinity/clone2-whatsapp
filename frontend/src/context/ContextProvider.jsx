
import { createContext, useContext, useState } from 'react';

// Création du contexte
const MyContext = createContext({});

// Création du provider
export const ContextProvider = ({ children }) => {
  // State pour l'utilisateur actif
  const [actifUser, setActifUser] = useState('');
  const [messages, setMessages] = useState([]);

  // Renvoyer le contexte avec les enfants
  return (
    <MyContext.Provider value={{messages, setMessages,  actifUser, setActifUser}}>
      {children}
    </MyContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMyContext = () => {
  return useContext(MyContext);
};
