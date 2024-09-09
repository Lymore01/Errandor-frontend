import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
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
      <main className="flex flex-col relative justify-between h-[80vh]  gap-4">
        <div className="p-4 flex flex-1 w-full bg-secondary rounded-md flex-col gap-4">
          <div className="w-full h-[20px] flex items-center justify-center text-sm">
            <p className="text-[#808080]">Chatting with kelly...</p>
          </div>
          <div className="flex w-full items-start justify-start">
            <div className="bg-primary/60 w-[200px] h-auto rounded-lg p-2 flex justify-between flex-col text-sm">
              <span>
                Hi, Kelly are you available to work on this errand now? 😁
              </span>
              <div className="w-full flex justify-end items-end">
                <span className="text-xs">10:10pm</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-end justify-end">
            <div className="bg-primary w-[200px] h-auto rounded-lg p-2 flex justify-between flex-col text-sm">
              <span>
                yes available
              </span>
              <div className="w-full flex justify-end items-end">
                <span className="text-xs">10:12pm</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start justify-start">
            <div className="bg-primary/60 w-[200px] h-auto rounded-lg p-2 flex justify-between flex-col text-sm">
              <span>
                Great😉
              </span>
              <div className="w-full flex justify-end items-end">
                <span className="text-xs">10:15pm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-secondary rounded-md p-4 flex flex-row justify-between items-center">
          <textarea
            name="message"
            id="message"
            className="w-full bg-[transparent] outline-none h-[30px]"
            placeholder="Message"
          ></textarea>
          <div
            role="button"
            className="w-fit h-auto p-2 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md"
          >
            <IoIosSend size={22} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
