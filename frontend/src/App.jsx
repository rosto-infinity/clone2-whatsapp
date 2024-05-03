
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Auth from './compoments/Auth/Auth';
import AuthHeader from './compoments/Auth/AuthHeader';
import ChatContainer from './compoments/ChatContainer';
import Header from './compoments/Header';


const socket = io.connect('http://localhost:3000/');
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
   <ChatContainer socket={socket}/>  
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

