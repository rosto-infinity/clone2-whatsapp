import BgChat from "./../public/images/bg2.png";
import HeaderLeftChat from "./ChatElments/Left/HeaderLeftChat";
import Search from "./ChatElments/Left/Search";
// import HeaderLeftChat from './ChatElments/Left/HeaderLeftChat';

import UserLists from "./ChatElments/Left/UserLists";
import HeaderRigthChat from "./ChatElments/Right/HeaderRigthChat";
import Messages from "./ChatElments/Right/Messages";
import MessageSender from "./ChatElments/Right/MessageSender";

function ChatContainer() {
  return (
    <div
      className=" absolute top-5 bottom-0 left-[2rem] right-[2rem] z-30 shadow-md "
      style={{ backgroundImage: `url(${BgChat})` }}
    >
      <div className="flex items-center h-full">
        {/* ChatElement__Left */}
        <div className=" basis-[43%]  h-full  shadow-md">
          <div className="grid grid-cols-1 mon-grid-row2 justify-center h-full shadow-md rounded-md bg-white">
            
            <HeaderLeftChat/>
            <Search />
            <UserLists />
          </div>
        </div>
        {/* ChatElement__Right */}
        <div className="h-full w-full grid grid-cols-1  mon-grid-row">
          <HeaderRigthChat />
          <Messages />
          <MessageSender />
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
