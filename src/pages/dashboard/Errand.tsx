import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
const Errand = () => {
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        <div className="w-[100px]">
          <Button href="/errand/1/edit" title="Edit" />
        </div>
      </div>
      <hr className="text-[#3d3d3d]" />
      <section className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Grocery shopping</h1>
        <p>Need someone to pick up groceries from the local market.</p>
        <div className="flex flex-row gap-4 items-center">
          <FaLocationDot size={20} />
          Nairobi - westlands
        </div>
        <div className="flex flex-row gap-4 items-center">
          <MdLocationCity size={20} />
          Supermarket
        </div>
        <div className="flex flex-row gap-4 items-center">
          <FaRegCalendarTimes size={20} />
          Today, 5:00 PM - <span className="text-[#FF5252]">Urgent</span>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <MdOutlinePriceChange size={20} />
          ksh.1000
        </div>
        <div className="flex flex-row gap-4 items-center">
          <GrStatusUnknown size={20} />
          Claimed
        </div>
        <div className="flex flex-row gap-4 items-center">
          <FaRegBookmark size={20} />
          Please get the receipt for reimbursement.
        </div>
        <section className="flex flex-col gap-4">
          <h1 className="font-semibold capitalize">Errandor</h1>
          <div className="bg-secondary w-full p-2 h-auto rounded-md flex flex-col gap-4">
            {/* card */}
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
            {/* button */}
            <Button href="/dashboard/errandor/1" title="View Profile" />
          </div>
        </section>

        {/* Accept/reject */}
        <hr className="text-[#3d3d3d]" />

        <section className="flex flex-row justify-between gap-4">
        <Link
            to={"/accept"}
            role="button"
            className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#4CAF50] rounded-lg cursor-pointer text-md"
          >
            Accept Kelly
          </Link>
          <Link
            to={"/accept"}
            role="button"
            className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#FF5252] rounded-lg cursor-pointer text-md"
          >
            Reject Kelly
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Errand;
