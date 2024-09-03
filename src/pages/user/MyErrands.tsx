import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { errands } from "../../utils/constants";
import ErrandCard from "../../components/dashboard/ErrandCard";
import StatusButton from "../../components/dashboard/StatusButton";

const MyErrands = () => {
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
      </div>
      <hr className="text-[#3d3d3d]" />
      {/* active errands */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg capitalize">Active Errands</h1>
        </div>
        <section className="flex flex-col gap-4">
          {errands.map((errand) => (
            <ErrandCard {...errand} showStatus={false}>
              <div className="w-full">
                <div className="w-full h-auto p-4 items-center justify-center flex font-semibold capitalize border border-[#4CAF50] rounded-lg cursor-pointer text-md">
                  Time remaining : 1hr 32min
                </div>
              </div>
            </ErrandCard>
          ))}
        </section>
      </section>
      {/* claimed errands */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg capitalize">Claimed Errands</h1>
        </div>
        <section className="flex flex-col gap-4">
          {errands.map((errand) => (
            <ErrandCard {...errand} showStatus={false}>
              <StatusButton bg={"bg-[#4CAF50]"} status={"Pending"} />
              <Link
                to={"/cancel"}
                role="button"
                className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#FF5252] rounded-lg cursor-pointer text-md"
              >
                cancel errand
              </Link>
            </ErrandCard>
          ))}
        </section>
      </section>
    </div>
  );
};

export default MyErrands;
