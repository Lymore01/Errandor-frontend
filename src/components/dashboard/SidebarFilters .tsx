/* eslint-disable @typescript-eslint/no-explicit-any */
import CategorySelect from "./CategorySelect";
import FilterSection from "./FilterSection";

const categories = [
  { id: 1, value: "Mama Fua", label: "Mama Fua" },
  { id: 2, value: "Maid", label: "Maid" },
  { id: 3, value: "Electrician", label: "Electrician" },
  { id: 4, value: "Cook", label: "Cook" },
];

const SidebarFilters = ({
  locations,
  prices,
  durations,
}: {
  locations: any;
  prices: any;
  durations: any;
}) => (
  <div className="w-[40vw]  h-auto rounded-md hidden md:flex text-[#EDEADE]">
    <div className="w-full h-auto items-start bg-[transparent] hidden md:flex p-6">
      <div className="flex flex-col justify-start items-start py-2 gap-5 h-auto w-full">
        {/* Category Selection */}
        <CategorySelect categories={categories} />
        {/* Filter Sections */}
        <FilterSection title="Location" options={locations} />
        <FilterSection title="Price" options={prices} />
        <FilterSection title="Duration" options={durations} />
      </div>
    </div>
  </div>
);

export default SidebarFilters;
