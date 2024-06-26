import axios from "axios";
import { useEffect, useRef } from "react";
import { useMyContext } from "../../../context/ContextProvider";

const Messages = ({socket}) => {
  const { messages, actifUser, user, setMessages } = useMyContext();

  const messagesEndRef = useRef(null);

  const getUser = async () => {
    try {
      //const user = JSON.parse(localStorage.getItem("user" || "{}"));

      const config = {
        headers: {
          authorization: `bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `/api/messages/${actifUser._id}`,
        config
      );

      setMessages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [actifUser]);

  useEffect(() => {
    socket.on('sendmessage', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="h-[86vh]">
      <ul className="h-full messages overflow-hidden p-4 relaive pb-10">
        {messages.map((msg, index) => {
          return (
            <li
              key={msg._id}
            ref={index === messages.length - 1 ? messagesEndRef : null}
              className={`
           ${
             user._id === msg.senderId
               ? "items-end justify-end"
               : " items-start justify-start"
           } w-full flex  rounded-md`}
            >
              <div
                className={`
          ${
            user._id === msg.senderId ? " bg-[#d9fdd3]" : "bg-[#f8faf8]"
          } p-2 mt-2 rounded-md relative`}
              >
                <span>{msg.message}</span>
                <div
                  class={`
        ${
          user._id === msg.senderId
            ? " border-t-[#d9fdd3]"
            : "border-t-[#f8faf8]"
        }
        w-0 h-0 absolute
        border-l-[10px] border-l-transparent
        border-t-[15px] -mt-8 -left-2
        border-r-[10px] border-r-transparent`
        }
        >

        </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Messages;
