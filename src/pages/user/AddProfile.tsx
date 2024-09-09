import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TextField from "../../components/auth/TextField";
import Button from "../../components/ui/Button";

const AddProfile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploads, setUploads] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setSelectedFile(file);
      setUploads(URL.createObjectURL(file));
    }
  };
  return (
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
        <div className="w-[100px]">
          <div
            onClick={() => {}}
            role="button"
            className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md"
          >
            Skip
          </div>
        </div>
      </div>
      <hr className="text-[#3d3d3d]" />
      <main className="gap-4 flex flex-col">
        <h1 className="text-lg">Add Profile Information</h1>

        <div className="mt-4">
          <div className="size-36 rounded-[10px] mb-[20px] sm:mb-0">
            {!selectedFile && (
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
                alt="Default"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
            )}
            {selectedFile && (
              <img
                src={uploads || ""}
                alt="Selected"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="text-black font-bold py-2 px-4 rounded cursor-pointer border border-slate-300 hidden flex-row gap-[20px] bg-green-500 sm:block md:mt-4 md:mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-center"
            >
              <path d="M11 15h2V9h3l-4-5-4 5h3z"></path>
              <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
            </svg>
          </button>
          <label htmlFor="file" className="mb-4">
            <input
              type="file"
              id="file"
              name="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="w-full h-auto p-4 items-center justify-center flex text-[black] font-semibold capitalize bg-[#98fb98] rounded-lg cursor-pointer text-md">
              Choose an image
            </div>
          </label>
        </div>
        <label htmlFor="contact">Contact Info</label>
        <TextField
          placeholder={"phone number"}
          type={"number"}
          disabled={false}
          border={""}
        />
        <label htmlFor="contact">
          Location <span className="text-xs">(optional)</span>
        </label>
        <TextField
          placeholder={"Location"}
          type={"string"}
          disabled={false}
          border={""}
        />
        <Button href="" title="Submit" />
      </main>
    </div>
  );
};

export default AddProfile;
