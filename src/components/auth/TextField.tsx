import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export type TextFieldProps = {
  type: string;
  placeholder: string;
  disabled: boolean;
  border: string;
};

const TextField = ({
  type,
  placeholder,
  disabled = false,
  border,
}: TextFieldProps) => {
  const [inpType, setInpType] = useState(type);
  const [inputValue, setInputValue] = useState("");
  const handleTogglePass = () => {
    setInpType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <div
      className={`w-full h-auto flex flex-row p-4 justify-between bg-secondary/30 shadow-lg rounded-sm items-center ${border}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        autoComplete="false"
        className={`placeholder:text-sm bg-[transparent] w-full h-full outline-none`}
        disabled={disabled}
      />
      {type === "password" && (
        <div>
          {inpType === "password" ? (
            <FaEyeSlash onClick={handleTogglePass} />
          ) : (
            <FaEye onClick={handleTogglePass} />
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
