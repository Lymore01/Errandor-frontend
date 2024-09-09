/* eslint-disable @typescript-eslint/no-explicit-any */
const CategorySelect = ({ categories }: { categories: any }) => (
  <div className="flex flex-col gap-5 text-lg font-semibold border-b border-[#3d3d3d] w-full pb-4">
    <span>Category</span>
    <select className="border border-[#3d3d3d] rounded-md p-2 text-sm font-normal outline-none bg-[transparent]">
      {categories.map((category: any) => (
        <option
          key={category.id}
          value={category.value}
          className="bg-primary text-sm"
        >
          {category.label}
        </option>
      ))}
    </select>
  </div>
);

export default CategorySelect;
