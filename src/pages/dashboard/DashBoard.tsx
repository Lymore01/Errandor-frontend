import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../components/ui/Logo";
import NavBar from "../../components/ui/NavBar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../../components/ui/MobileMenu";
import { IoCloseSharp } from "react-icons/io5";
import { dashboardNavigationMenus, errands } from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import ErrandCard from "../../components/dashboard/ErrandCard";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import { durations } from "../../utils/durations";
import { prices } from "../../utils/prices";
import { locations } from "../../utils/locations";
import SidebarFilters from "../../components/dashboard/SidebarFilters ";
import { useSearchParams } from "react-router-dom";

const DashBoard = () => {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isClaimOpen, setIsClaimOpen] = useState<boolean>(false);
  const [filteredErrands, setFilteredErrands] = useState([]);
  const [dynamicTitle] = useState("Errands For You");
  const [searchParams] = useSearchParams();

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClaimToggle = () => {
    setIsClaimOpen(true);
  };

  useEffect(() => {
    searchParams.forEach((value) => {
      setQuery(value);
    });
  }, [searchParams]);

  useEffect(() => {
    const filtered = errands.filter((errand) =>
      errand.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredErrands(filtered);
  }, [query]);

  return (
    <div className="p-4 text-[#EDEADE] relative w-full ">
      <NavBar>
        <nav className="flex md:hidden flex-row justify-between w-full items-center">
          <Logo image="public\logo-white.png" />
          <GiHamburgerMenu size={30} fill="white" onClick={handleMenuOpen} />
        </nav>
      </NavBar>
      <hr className="text-[#3d3d3d]" />
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu>
            <div className="flex flex-row justify-between items-center">
              <Logo image="public\logo-white.png" />
              <IoCloseSharp
                size={24}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            </div>
            <div className="relative">
              {/* profile */}
              <Link
                to={"/profile"}
                className="w-full px-2 py-4 flex flex-col justify-between items-start bg-secondary/30 rounded-md gap-4"
              >
                <div className="flex flex-row gap-4 items-center">
                  <div className="size-12 bg-primary rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s"
                      alt="profile picture"
                      className="rounded-full object-cover object-center"
                    />
                  </div>
                  <h1>Kelly Limo</h1>
                </div>
                {/* progress */}
                <div className="flex flex-row gap-2 w-full h-auto items-center">
                  <div className="w-full bg-primary h-[16px] rounded-full">
                    <div className="flex items-start bg-[#4CAF50] w-[90%] h-full rounded-full"></div>
                  </div>
                  <span>90%</span>
                </div>
              </Link>
              {dashboardNavigationMenus.map(({ href, id, link }) => (
                <Link
                  to={href}
                  reloadDocument
                  key={id}
                  className="w-full h-auto border border-[transparent] border-b-[grey]/60 py-4 px-2 flex justify-between hover:bg-primary"
                >
                  {link}
                  <FaArrowRight size={18} />
                </Link>
              ))}
              <Link
                to={"/sign-in"}
                className="w-full px-2 py-4 flex flex-row justify-between items-center"
              >
                Logout
                <FiLogOut size={24} />
              </Link>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
      <main className="py-4 flex-1 flex flex-col md:flex-row gap-6">
        <h1 className="text-xl capitalize flex md:hidden">
          Hi <span className="font-semibold">Kelly</span>, Karibu Tena 😁
        </h1>
        <SidebarFilters
          locations={locations}
          prices={prices}
          durations={durations}
        />
        {/* my errands */}
        <div className="py-4 flex-1 flex flex-col gap-4">
          {/* my errands */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-lg capitalize">{dynamicTitle}</h1>
              <div className="w-[100px]">
                <Button href={"/discover"} title={"More"} />
              </div>
            </div>
            <section className="flex flex-col gap-4 md:grid md:grid-cols-1 md:w-full">
              {filteredErrands.map((errand, index) => (
                <ErrandCard {...errand} showStatus={false} key={index}>
                  <div className="w-full">
                    <Button href={"/dashboard/errand/1"} title="More details" />
                  </div>
                  <div
                    onClick={handleClaimToggle}
                    role="button"
                    className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#4CAF50] rounded-lg cursor-pointer text-md"
                  >
                    claim
                  </div>
                </ErrandCard>
              ))}
            </section>
          </section>
          <hr className="text-[#3d3d3d]" />
          <section className="flex flex-col gap-4 ">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-lg capitalize">My Errands</h1>
              <div className="w-[100px]">
                <Button href={"/post-errand"} title={"Add"} />
              </div>
            </div>
            <section className="flex flex-col gap-4 md:grid md:grid-cols-1 md:w-full">
              {errands.map((errand, index) => (
                <ErrandCard {...errand} showStatus={true} key={index}>
                  <div className="w-full">
                    <Button href={"/dashboard/errand/1"} title="More details" />
                  </div>
                </ErrandCard>
              ))}
            </section>
          </section>
        </div>
      </main>
      <AnimatePresence>
        {isClaimOpen && (
          <Modal
            handleModalClose={() => setIsClaimOpen(false)}
            closeTitle="Cancel"
            buttonTitle="Claim"
            acknowledgment="I have read and understood the responsibilities associated with claiming this errand."
            notice="Please ensure that you can fulfill the errand requirements before claiming. Irresponsible claiming may lead to penalties or restrictions on your account."
            modalTitle="Confirm Errand Claim?"
          >
            {/* Job Overview Section */}
            <div className="bg-secondary/30 flex flex-col gap-2 p-3 rounded-md text-sm">
              <p>
                <strong>Job Title:</strong> Cat Babysitting
              </p>
              <p>
                <strong>Location:</strong> 123 Cat Avenue, Floor 2
              </p>
              <p>
                <strong>Time Commitment:</strong> 3 hours
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashBoard;
