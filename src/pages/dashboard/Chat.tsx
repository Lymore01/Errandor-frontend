import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import React, { useState } from "react";

type MessageProps = {
  messages: string | number;
};

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4 md:w-[80%] mx-auto">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        <div className="w-[100px]">
          <div
            role="button"
            className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md"
          >
            <IoCall size={18} />
          </div>
        </div>
      </div>
      <hr className="text-[#3d3d3d]" />

      <main className="flex flex-col md:flex-row relative w-full justify-between h-[80vh]  gap-4">
        {/* online card */}
        <div className="w-[100%] md:w-[30%] p-4 flex flex-row gap-4 border border-[#3d3d3d] rounded-md h-auto md:h-[200px]">
          <div className="w-full flex flex-row gap-4 ">
            <div className="size-12 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s"
                alt="profile picture"
                className="rounded-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Kelly Limo</h1>
              <div
                className={`w-fit md:w-[180px] h-auto px-4 py-1 flex items-center justify-center border border-[#4CAF50]  rounded-full`}
              >
                <h1 className="text-xs text-[#4CAF50] font-semibold">online</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative justify-between h-full gap-4 flex-1">
          {/* message area */}
          <div className="p-4 flex flex-1 w-full bg-secondary/30 rounded-md flex-col gap-4 first-line min-h-[54vh] max-h-[54vh] md:min-h-[64vh] overflow-y-scroll">
            <div className="w-full h-[20px] flex items-center justify-center text-sm">
              <p className="text-[#808080]">Chatting with kelly...</p>
            </div>
            <SenderMessageBox
              sentMessage={
                "Hi, Kelly are you available to work on this errand now? 😁"
              }
            />
            <ReceiverMessageBox receivedMessage={"yes available"} />
            {messages.map((msg) => (
              <SenderMessageBox sentMessage={msg} />
            ))}
          </div>
          <div className="w-full bg-secondary/30 rounded-md p-4 flex flex-row justify-between items-center">
            <textarea
              name="message"
              id="message"
              className="w-full bg-[transparent] outline-none h-[30px]"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <div
              role="button"
              className="w-fit h-auto p-2 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md"
            >
              <IoIosSend size={22} onClick={handleSendMessage} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;

type MessageProp = {
  sentMessage: string | number;
  receivedMessage: string | number;
};

const SenderMessageBox = ({ sentMessage }: Partial<MessageProp>) => {
  return (
    <div className="flex w-full items-end justify-end">
      <div className="bg-primary w-[200px] h-auto rounded-lg p-2 flex justify-between flex-col text-sm">
        <span>{sentMessage}</span>
        <div className="w-full flex justify-end items-end">
          <span className="text-xs">10:12pm</span>
        </div>
      </div>
    </div>
  );
};

const ReceiverMessageBox = ({ receivedMessage }: Partial<MessageProp>) => {
  return (
    <div className="flex w-full items-start justify-start">
      <div className="bg-primary/60 w-[200px] h-auto rounded-lg p-2 flex justify-between flex-col text-sm">
        <span>{receivedMessage}</span>
        <div className="w-full flex justify-end items-end">
          <span className="text-xs">10:15pm</span>
        </div>
      </div>
    </div>
  );
};
