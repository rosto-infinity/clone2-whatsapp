
const Messages = () => {

  return (
    <div className="h-[86vh]">
      <ul className="h-full messages overflow-hidden p-12">
        <li className="w-full flex items-start justify-start">
          <div className="bg-[#d9fdd3] p-1">
            <span>Bonjour</span>
          </div>
        </li>

        <li className="w-full flex items-start justify-end">
          <div className="bg-[#d9fdd3] p-1 ">
            <span>Bonjour</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
