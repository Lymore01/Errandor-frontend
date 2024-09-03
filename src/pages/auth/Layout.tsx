import TextField from "../../components/auth/TextField";
import Button from "../../components/ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../../components/ui/Logo";
import { Link } from "react-router-dom";

export type LayoutProps = {
  children: React.ReactNode;
};
export type FormVariants = {
  name: string;
  description: {
    title: string;
    link: string;
  };
  buttonDes: string;
  linkTo: string;
  href: string;
};

const Layout = ({
  name,
  description,
  buttonDes,
  linkTo,
  href,
}: FormVariants) => {
  return (
    <main className="w-full h-[100vh] bg-primary overflow-hidden p-6 text-[white]">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 h-full relative">
        <div className="top-0 left-0 flex md:hidden h-auto">
          <Logo image="public\logo-white.png" />
        </div>
        {/* left side */}
        <div className="rounded-lg p-4 hidden md:flex bg-cover bg-[url(https://img.freepik.com/free-photo/digital-art-with-city-landscape-architecture_23-2151065702.jpg?t=st=1725276576~exp=1725280176~hmac=eac3b72d044a0c758602a005fa514183957e70128eab5ad0b921c798e6e8582e&w=900)] md:flex-col justify-between items-center w-full">
          <div className="p-2 flex justify-between items-center w-full">
            <Logo image="public\Errandor-logo-white.png" />
            <div className="w-fit px-4 py-2 flex items-center justify-between gap-2 text-xs bg-[#98fb98]/10 backdrop-blur-xl rounded-full cursor-pointer">
              <p className="capitalize">back to home</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        {/* right side */}
        <section className="space-y-6 flex flex-col justify-center items-start w-full px-4 md:px-12">
          <header className="space-y-4">
            <h1 className="text-4xl">{description.title}</h1>

            <p className="text-xs text-[#808080] flex flex-row gap-2">
              {name === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <Link to={linkTo} className="underline text-[#98fb98]">
                {name === "Login" ? "sign up" : "sign in"}
              </Link>
            </p>
          </header>
          <form className="space-y-4 w-full">
            {name !== "Login" && (
              <div
                className="flex justify-between items-center gap-4"
                id="full-name"
              >
                <TextField type="text" placeholder="First name" />
                <TextField type="text" placeholder="Last name" />
              </div>
            )}
            <TextField type="email" placeholder="Email" />
            <TextField type="password" placeholder="Enter your password" />
            <div className="space-x-2 flex flex-row">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="accent-[#ECEAE2] focus:accent-[#98fb98] size-4 rounded-md"
              />
              <p className="text-xs text-[#808080] flex flex-row gap-2">
                I agree to the
                <p className="underline text-[#98fb98]">
                  <span>Terms and conditions</span>
                </p>
              </p>
            </div>
            {/* button */}
            <Button href={href} title={buttonDes} />
          </form>
        </section>
        {/* Footer visible on mobile devices */}
        <footer className="px-4 md:p-0 w-full flex items-center justify-center flex-col text-xs gap-2 md:hidden">
          <p className="text-[#808080]">Copyrights @2024 All rights reserved</p>
          <p className="text-[#808080]">Developed by Kelly Limo.</p>
        </footer>
      </section>
    </main>
  );
};

export default Layout;
