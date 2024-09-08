import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { errands } from "../../utils/constants";
import ErrandCard from "../../components/dashboard/ErrandCard";
import StatusButton from "../../components/dashboard/StatusButton";
import { AnimatePresence } from "framer-motion";
import Modal from "../../components/ui/Modal";
import { useState } from "react";

const MyErrands = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4 relative">
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
              <div
                onClick={handleModalToggle}
                role="button"
                className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#FF5252] rounded-lg cursor-pointer text-md"
              >
                cancel errand
              </div>
            </ErrandCard>
          ))}
        </section>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            handleModalClose={() => setIsModalOpen(false)}
            closeTitle="Keep Errand"
            buttonTitle="Continue"
            acknowledgment="I understand the consequences of canceling a claimed errand and agree to the terms."
            notice="Canceling an errand that you have already claimed may affect your reliability score and could lead to temporary restrictions on claiming future errands. Only cancel if absolutely necessary."
            modalTitle="Cancel Claimed Errand?"
          >
            {/* Job Overview Section */}
            <div></div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyErrands;
