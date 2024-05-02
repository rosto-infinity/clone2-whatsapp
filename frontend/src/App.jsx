
import { useEffect, useState } from 'react';
import './App.css';
import ChatContainer from './compoments/ChatContainer';
import Header from './compoments/Header';
import Auth from './compoments/Auth/Auth';
import AuthHeader from './compoments/Auth/AuthHeader';
function App() {

  const [user, setUser] = useState({});
 
  
  useEffect(() => {
     //****code a executer lors du lancement de notre app.jsx ***\\
     //recuperer les infos de l'user dans le localstorage ave getItem
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userInfo);
  }, []);

  if(user.token){
    return(
  
   <div> 
   <Header />
   <ChatContainer />  
   </div>
    ) ;
    
  }

  return (
  <div> 
    <AuthHeader />
    <Auth />
  </div>
  );
}

export default App

