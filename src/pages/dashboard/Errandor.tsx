import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../components/ui/Button";

const Errandor = ({
  children,
  showCallButton = false,
}: {
  children: React.ReactNode;
  showCallButton: boolean;
}) => {
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        {children}
      </div>
      <hr className="text-[#3d3d3d]" />
      
      <div className="flex justify-end items-end w-full text-xs z-20">
        <a href="/add-profile" className="underline">
          complete profile (90% complete)
        </a>
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <div className="size-20 bg-primary rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s"
              alt="profile picture"
              className="rounded-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="capitalize">Kelly Limo</h1>
            <div className="flex flex-row">
              <BsStarFill className="text-[orange]" />
              <BsStarFill className="text-[orange]" />
              <BsStarFill className="text-[orange]" />
              <BsStarHalf className="text-[orange]" />
            </div>
          </div>
        </div>
        {/* <Button href="" title="Change profile picture"/> */}
        <hr className="text-[#3d3d3d]" />
        <div className="flex flex-col gap-4">
          <h1 className="capitalize">Contact information</h1>
          <div className=" flex justify-between bg-secondary p-2 rounded-md gap-4">
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt size={20} />
              0719520494
            </div>
            {showCallButton && (
              <div className="w-[100px]">
                <Button href="/errandor/1/Chat" title="Chat" />
              </div>
            )}
          </div>
          <div className="flex flex-row gap-2 items-center bg-secondary px-2 py-4 rounded-md ">
            <MdMarkEmailUnread size={20} />
            kellylimo@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="capitalize">Location</h1>
          <div className="flex flex-row gap-2 items-center bg-secondary px-2 py-4 rounded-md ">
            <FaLocationDot size={20} />
            Nakuru - Milimani
          </div>
        </div>
      </section>
      <hr className="text-[#3d3d3d]" />
      <section className="flex flex-col gap-4">
        <h1 className="capitalize">Stats</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary rounded-md p-4 flex flex-col gap-4">
            <h1>Errands Completed</h1>
            <span className="text-4xl font-bold">5</span>
            <span className="underline">view</span>
          </div>
          <div className="bg-secondary rounded-md p-4 flex flex-col gap-4">
            <h1>Errands Cancelled</h1>
            <span className="text-4xl font-bold">0</span>
            <span className="underline">view</span>
          </div>
          <div className="bg-secondary rounded-md p-4 flex flex-col gap-4">
            <h1>Active Errands</h1>
            <span className="text-4xl font-bold">2</span>
            <span className="underline">view</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Errandor;
