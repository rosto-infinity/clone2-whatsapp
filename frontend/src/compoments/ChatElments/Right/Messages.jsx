import axios from "axios";
import { useMyContext } from "../../../context/ContextProvider";
import { useEffect } from "react";

const Messages = () => {
  const  {actifUser, messages, setMessages}= useMyContext();


  const GetMessage= async ()=>{

    try {
      const user = JSON.parse(localStorage.getItem("user" || "{}"));

      const config = {
        headers: {
          authorization: `bearer ${user.token}`,
        },
      }; 
      const { data } = await axios.get(`/api/messages/${actifUser._id}`,
        config);

        setMessages(data);
      console.log(data);  
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
   GetMessage();
  }, [actifUser]);
  return (
    <div className="h-[86vh]">
      <ul className="h-full messages overflow-hidden p-4 relaive">
        {messages.map((msg) => {
         return <li 
          key={msg._id}
          className="w-full flex items-start justify-start rounded-md">
          
          <div className="bg-[#d9fdd3] p-2 mt-2 rounded-md relative">
        <span>{msg.message}</span>
         </div>
          </li>
        })}
       

        {/* <li className="w-full flex items-start justify-end">
          <div className="bg-[#d9fdd3] p-1 ">
            <span>Bonjour</span>
          </div>
        </li> */}

      </ul>
    </div>
  );
};

export default Messages;
