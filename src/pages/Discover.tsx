import { IoMdArrowRoundBack } from "react-icons/io";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Discover = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const handleAdvancedSearch = () => {
    setSearchToggle(!searchToggle);
  };
  
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        {/* search bar */}
        <div className="flex flex-1 bg-secondary/30 rounded-md p-4 justify-between">
          <input
            type="text"
            name="search-errand"
            id="errand-search"
            className="outline-none bg-[transparent]"
            placeholder="Search errands..."
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h1>Advanced Search</h1>
        {searchToggle == true ? (
          <FaToggleOn size={24} onClick={handleAdvancedSearch} />
        ) : (
          <FaToggleOff size={24} onClick={handleAdvancedSearch} />
        )}
      </div>
      <AnimatePresence>
        {searchToggle && (
          <motion.section
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: 100,
            }}
            transition={{
              duration: 0.1,
            }}
            className="flex flex-col gap-4"
          >
            <section className="flex flex-col gap-2">
              location:
              <input
                type="text"
                name="search-errand"
                id="errand-search"
                className="outline-none bg-secondary/30 rounded-md p-4"
                placeholder="Enter location..."
              />
            </section>
            <section className="flex flex-col gap-2">
              sub-location:
              <input
                type="text"
                name="search-errand"
                id="errand-search"
                className="outline-none bg-secondary/30 rounded-md p-4"
                placeholder="Enter sub-location..."
              />
            </section>
            <section className="flex flex-col gap-2">
              Price:
              <input
                type="text"
                name="search-errand"
                id="errand-search"
                className="outline-none bg-secondary/30 rounded-md p-4"
                placeholder="Enter price..."
              />
            </section>
            <div>
              <Button href="/se" title="Search" />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <hr className="text-[#3d3d3d]" />
      {/* search results */}
      <section>
        <h1>
          Search results for: <span className="font-bold">Shopping</span>
        </h1>
      </section>
    </div>
  );
};

export default Discover;
