import Logo from "./Logo";
import { navigationMenus } from "../../utils/constants";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      {/* larger devices */}
      <nav className="hidden md:flex flex-row justify-between w-full items-center text-[#EDEADE]">
        <Logo image="public\Errandor-logo-white.png" />
        <div className="flex flex-row gap-6">
          {navigationMenus.map(({ href, id, link }) => (
            <Link to={href} key={id}>
              {link}
            </Link>
          ))}
        </div>
        {/* login buttons */}
        <section className="flex flex-row gap-6 items-center">
          <p>Login</p>
          <Button href="/sign-in" title="Get Started" />
        </section>
      </nav>
    </div>
  );
};

export default NavBar;

