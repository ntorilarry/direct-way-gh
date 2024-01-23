import React from "react";
import IChat from "../../models/ChatModels";

interface IProps {
  chat: IChat;
}
const Sender = ({ chat }: IProps) => {
  return (
    <div>
    <div className="flex items-center justify-start">
      
        <div className="relative mr-3 text-sm text-white bg-[#4187ED] py-2 px-4 shadow rounded-xl">
          <div>{chat.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Sender;
