import FeatureCard from "../../components/home/FeatureCard";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import { features, navigationMenus, stepsData } from "../../utils/constants";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "../../components/ui/Footer";
import NavBar from "../../components/ui/NavBar";
import MobileMenu from "../../components/ui/MobileMenu";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  return (
    <div className="bg-primary p-4 w-full lg:w-[80%] mx-auto h-max-screen justify-between flex flex-col relative">
      <NavBar>
        <nav className="flex md:hidden flex-row justify-between w-full items-center">
          <Logo image="public\logo-white.png" />
          <GiHamburgerMenu size={30} fill="white" onClick={handleMenuOpen} />
        </nav>
      </NavBar>

      <hr className="text-[#3d3d3d]" />

      <main className="flex flex-1 py-4 md:py-16 flex-col gap-4 md:gap-8 text-[#EDEADE]">
        <h1 className="text-wrap md:text-center font-semibold text-2xl md:text-4xl ">
          Get Things Done, Effortlessly!
        </h1>
        <p className="text-[#808080] md:text-sm md:text-center">
          Need a hand with your errands?😊<br></br> Let Errandor connect you
          with trusted doers ready to help—whenever, wherever.
        </p>
        {/* CTA */}
        <section className="flex flex-col md:flex-row gap-4 md:w-[50%] md:mx-auto">
          <Button href="/post-errand" title="Post Your Errand Now" />
          <Button href="/sign-up" title="Become an Errandor" />
        </section>
        <section>
          <img src="sample.PNG" alt="dash view" className="w-full h-auto border border-[#3d3d3d] rounded-md hidden md:flex"/>
          <img src="sampleMobile.PNG" alt="dash view" className="w-full h-auto border border-[#3d3d3d] rounded-md md:hidden flex"/>
        </section>
        {/* Feature section */}
        <h1 className="text-wrap font-semibold text-lg mt-4">Why Choose Errandor?</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map(({ description, icon, id, title }) => (
            <FeatureCard
              key={id}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </section>
        {/* how it works section */}
        <h1 className="text-wrap font-semibold text-lg mt-4">How it works</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 w-full text-[#EDEADE]">
          <div className="p-4 bg-secondary rounded-md h-auto flex flex-col gap-4 items-start">
            {stepsData.map(({ title, step }) => (
              <div className="flex flex-row gap-4" key={step}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  key={step}
                  className="accent-[#ECEAE2] focus:accent-[#98fb98] size-4 rounded-md"
                />
                <p className="text-[] flex flex-row gap-2">{title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <hr className="text-[#3d3d3d]" />

      <Footer />
      {/* mobile menu */}
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
            <div>
              {navigationMenus.map(({ href, id, link }) => (
                <Link
                  to={href}
                  key={id}
                  className="w-full h-auto border border-[transparent] border-b-[grey]/60 py-4 px-2 flex justify-between hover:bg-primary"
                >
                  {link}
                  <FaArrowRight size={18} />
                </Link>
              ))}
              <section className="flex flex-col mt-4 gap-4">
                <Button href="/sign-in" title="Login" />
                <Button href="/sign-up" title="Get started" />
              </section>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
