import Logo from "./Logo";
import {
  dashboardNavigationMenus,
  navigationMenus,
} from "../../utils/constants";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation().pathname;
  return (
    <div className="">
      {children}
      {/* larger devices */}
      <nav className="hidden md:flex flex-row justify-between w-full items-center text-[#EDEADE]">
        <Logo image="public\Errandor-logo-white.png" />
        <div className="flex flex-row gap-6 md:text-sm items-center">
          {location === "/" ? (
            navigationMenus.map(({ href, id, link }) => (
              <Link to={href} key={id}>
                {link}
              </Link>
            ))
          ) : (
            <>
              {dashboardNavigationMenus
                .filter(
                  ({ link }) =>
                    link === "Post An Errand" || link === "My Errands"
                )
                .map(({ href, id, link }) => (
                  <>
                    <Link to={href} key={id}>
                      {link}
                    </Link>
                  </>
                ))}
              <div className="flex flex-1 bg-secondary rounded-md p-4 justify-between items-center">
                <input
                  type="text"
                  name="search-errand"
                  id="errand-search"
                  className="outline-none bg-[transparent]"
                  placeholder="Search errands..."
                />
                <IoSearchOutline
                  size={20}
                  fill="#3d3d3d"
                  className="cursor-pointer"
                />
              </div>
              <IoMdNotificationsOutline size={24}/>
              <div className="size-8 bg-primary rounded-full cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s"
                  alt="profile picture"
                  className="rounded-full object-cover object-center"
                />
              </div>
            </>
          )}
        </div>
        {/* login buttons */}
        {location === "/" ? (
          <section className="flex flex-row gap-6 items-center">
            <p>Login</p>
            <Button href="/sign-in" title="Get Started" />
          </section>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
