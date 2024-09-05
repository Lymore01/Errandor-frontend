import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../components/ui/Logo";
import NavBar from "../../components/ui/NavBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../../components/ui/MobileMenu";
import { IoCloseSharp } from "react-icons/io5";
import { dashboardNavigationMenus, errands } from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import ErrandCard from "../../components/dashboard/ErrandCard";
import Button from "../../components/ui/Button";

const DashBoard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  return (
    <div className="p-4 text-[#EDEADE]">
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
                className="w-full px-2 py-4 flex flex-row justify-between items-center bg-secondary rounded-md"
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
      <main className="py-4 flex-1 flex flex-col gap-6">
        <h1 className="text-xl capitalize">
          Hi <span className="font-semibold">Kelly</span>, Karibu Tena 😁
        </h1>
        {/* my errands */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-lg capitalize">My Errands</h1>
            <div className="w-[100px]">
              <Button href={"/post-errand"} title={"Add"} />
            </div>
          </div>
          <section className="flex flex-col gap-4">
            {errands.map((errand) => (
              <ErrandCard {...errand} showStatus={true}>
                <div className="w-full">
                  <Button href={"/dashboard/errand/1"} title="More details" />
                </div>
              </ErrandCard>
            ))}
          </section>
        </section>
        <hr className="text-[#3d3d3d]" />
        {/* my errands */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-lg capitalize">Errands For You</h1>
            <div className="w-[100px]">
              <Button href={"/discover"} title={"More"} />
            </div>
          </div>
          <section className="flex flex-col gap-4">
            {errands.map((errand) => (
              <ErrandCard {...errand} showStatus={false}>
                <div className="w-full">
                  <Button href={"/dashboard/errand/1"} title="More details" />
                </div>
                <Link
                  to={"/errand/1/claim"}
                  role="button"
                  className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#4CAF50] rounded-lg cursor-pointer text-md"
                >
                  claim
                </Link>
              </ErrandCard>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
