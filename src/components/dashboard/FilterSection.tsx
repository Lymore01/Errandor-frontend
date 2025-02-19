/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
const FilterSection = ({ title, options }: { title: string; options: any }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (value: string) => {
    setSearchParams({ location: value });
  };

  return (
    <div className="flex flex-col gap-5 text-lg font-semibold border-b border-[#3d3d3d] w-full pb-4">
      <span>{title}</span>
      <div className="flex flex-col gap-3 pl-4">
        {options.map((option: any) => (
          <span
            className="flex flex-row gap-3 text-sm font-normal items-center"
            key={option.id}
          >
            <input
              type="checkbox"
              className="accent-[#ECEAE2] focus:accent-[#98fb98]"
              onChange={() => {
                handleChange(option.name || option.price || option.duration);
              }}
            />
            {option.name || option.price || option.duration}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
