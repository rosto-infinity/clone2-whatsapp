import { useState } from "react";

import { useMyContext } from "../../../context/ContextProvider";
import axios from "axios";

const MessageSender =  () => {

  const [message, setMessage]= useState('');
  const  {actifUser, messages, setMessages}= useMyContext();
  
  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user" || "{}"));

      const config = {
        headers: {
          authorization: `bearer ${user.token}`,
        },
      }; 
      const { data } = await axios.post("/api/messages/",
       {message: message.trim() , receverId:actifUser._id}, config);

       setMessages([...messages,data]);
       setMessage(' ');
        console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className=' h-full bg-[#f0f2f5]'>
      <form
       onSubmit={submitHandler}
        className=' flex justify-evenly px-5 py-2 items-center'
      >
        <input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Entrez un message'
          className=' w-[92%] p-2 rounded-md outline-none'
        />
        {message && message.trim() && (
        <button type='submit' className=' opacity-60 cursor-pointer'>
            <svg
              viewBox='0 0 24 24'
              height='24'
              width='24'
              preserveAspectRatio='xMidYMid meet'
              version='1.1'
              x='0px'
              y='0px'
              enableBackground='new 0 0 24 24'
              xmlSpace='preserve'
            >
              <path
                fill='currentColor'
                d='M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z'
              ></path>
            </svg>
          </button>
        )}
          
       
      </form>
    </div>
  );
};

export default MessageSender;
