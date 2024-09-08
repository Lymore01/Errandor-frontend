import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TextField from "../../components/auth/TextField";
import Button from "../../components/ui/Button";
import { useState } from "react";

const PostErrand = () => {
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
    <div className="p-4 text-[#EDEADE] flex flex-col gap-4 relative">
      
      <div className="flex flex-row justify-between items-center w-full">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack size={24} />
        </Link>
      </div>
      <hr className="text-[#3d3d3d]" />
      <h1 className="capitalize text-lg">Post An Errand</h1>
      <form action="" className="w-full flex flex-col gap-4">
        <label htmlFor="errand-name" id="errand-name">
          Errand Name
        </label>

        <TextField placeholder="Cat babysitting" type="text" />
        <label htmlFor="errand-image" id="errand-image">
          Image
        </label>
        <div className="mt-4">
          <div className="size-36 rounded-[10px] mb-[20px] sm:mb-0">
            {!selectedFile && (
              <img
                src="https://www.shutterstock.com/image-photo/litte-cute-birman-cat-jumping-600nw-2462995331.jpg"
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
        <label htmlFor="errand-des" id="errand-des">
          Description
        </label>
        <textarea
          name="errand-des"
          id="errand-des"
          className="h-40 bg-secondary outline-none p-2"
          placeholder="Cat babysitting for Mr. Whiskers – he’s a retired nap champion who enjoys pretending he’s being ignored. Warning: Will demand cuddles and tuna snacks at unpredictable moments. 😼🛋️..."
        ></textarea>
        <label htmlFor="errand-name" id="errand-name">
          Location
        </label>
        <div className="bg-secondary w-full h-auto flex flex-col px-2 py-4 gap-4">
          <div>
            <label htmlFor="errand-county" id="errand-county">
              County
            </label>
            <input
              type="text"
              placeholder="Nakuru"
              autoComplete="false"
              className="placeholder:text-sm bg-primary w-full px-2 py-4  outline-none mt-4"
            />
          </div>
          <div>
            <label htmlFor="errand-county" id="errand-county">
              Sub-county
            </label>
            <input
              type="text"
              placeholder="London"
              autoComplete="false"
              className="placeholder:text-sm bg-primary w-full px-2 py-4  outline-none mt-4"
            />
          </div>
          <div>
            <label htmlFor="errand-county" id="errand-county">
              place
            </label>
            <input
              type="text"
              placeholder="Milimani estate"
              autoComplete="false"
              className="placeholder:text-sm bg-primary w-full px-2 py-4  outline-none mt-4"
            />
          </div>
          <div>
            <iframe
              src="https://maps.google.com/maps?q=nakuru milimani%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              height={200}
              width={"100%"}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="errand-date-time" id="errand-date-time">
            Date and time
          </label>
          <div className="w-full h-auto bg-secondary p-2">
            <input
              type="datetime-local"
              name="date-time"
              id="date-time"
              className="bg-primary p-2 outline-none w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="errand-time" id="errand-time">
            Completion time
          </label>
          <div className="w-full h-auto bg-secondary p-2">
            <input
              type="time"
              name="time"
              id="time"
              className="bg-primary p-2 outline-none w-full"
            />
          </div>
        </div>
        <label htmlFor="errand-name" id="errand-name">
          Payment
        </label>
        <TextField placeholder="ksh.3000" type="number" />
        <label htmlFor="errand-urgency" id="errand-urgency">
          Urgency
        </label>
        <select className="bg-[transparent] outline-none h-[60px] border border-[grey]/20">
          <option value="High" key="high" className="bg-secondary text-sm">
            High
          </option>
          <option value="Medium" key="Medium" className="bg-secondary text-sm">
            Medium
          </option>
          <option value="Low" key="Low" className="bg-secondary text-sm">
            Low
          </option>
        </select>
        <label htmlFor="errand-instruction" id="errand-instruction">
          Instructions
        </label>
        <textarea
          name="errand-instruction"
          id="errand-instruction"
          className="h-40 bg-secondary outline-none p-2"
          placeholder="Mr. Whiskers is a drama king – do not, I repeat, DO NOT, look away while he's sunbathing or you’ll hear about it for hours 🐱☀️..."
        ></textarea>
        <Button href="" title="Submit" />
      </form>
    </div>
  );
};

export default PostErrand;
