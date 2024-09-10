import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TextField from "../../components/auth/TextField";
import { useState } from "react";
import Button from "../../components/ui/Button";
import Footer from "../../components/ui/Footer";

const accountInfo = [
  {
    id: 1,
    htmlFor: "firstName",
    title: "First Name",
    placeholder: "Kelly",
    type: "text",
  },
  {
    id: 2,
    htmlFor: "lastName",
    title: "Last Name",
    placeholder: "Limo",
    type: "text",
  },
  {
    id: 3,
    htmlFor: "email",
    title: "Email",
    placeholder: "kellylimo@yahoo.com",
    type: "email",
  },
  {
    id: 4,
    htmlFor: "password",
    title: "Password",
    placeholder: "elamai@1234",
    type: "password",
  },
];

const Account = () => {
  const [editButtonShow, setEditButtonShow] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const handleEdit = () => {
    setEditButtonShow(true);
    setInputDisabled(false);
  };
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4 md:w-[80%] mx-auto">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        <div className="w-[100px]">
          <div
            onClick={handleEdit}
            role="button"
            className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md"
          >
            Edit
          </div>
        </div>
      </div>
      <hr className="text-[#3d3d3d]" />
      <main className="gap-4 flex flex-col">
        <h1 className="text-lg">Account</h1>
        <form action="" className="gap-4 flex flex-col w-full md:w-[60%] mx-auto">
          {accountInfo.map(({ htmlFor, id, placeholder, title, type }) => (
            <div key={id} className="flex flex-col gap-4">
              <label htmlFor={htmlFor} id={htmlFor}>
                {title}
              </label>
              <TextField
                placeholder={placeholder}
                type={type}
                disabled={inputDisabled}
                border={inputDisabled == true ? "" : "border border-[#98fb98]"}
              />
            </div>
          ))}

          {editButtonShow && <Button href="" title="Save" />}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
