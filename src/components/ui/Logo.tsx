import { Link } from "react-router-dom";

const Logo = ({ image }: { image: string }) => {
  return (
    <Link to={"/"} className="cursor-pointer">
      <img src={image} alt="" className="w-[80px] md:w-[160px]"/>
    </Link>
  );
};

export default Logo;
