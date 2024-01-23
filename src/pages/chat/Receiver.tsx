import React from "react";
import IChat from "../../models/ChatModels";
interface IProps {
  chat: IChat;
}
function Receiver({ chat }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{chat.message}</div>
        </div>
      </div>
    </div>
  );
}

export default Receiver;
