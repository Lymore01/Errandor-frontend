const LocationButton = ({ location, bg="bg-[#98fb98]" }: { location: string, bg:string }) => {
  return (
    <div className={`w-fit md:w-[180px] h-auto px-4 py-1 flex items-center justify-center ${bg}  rounded-full`}>
      <h1 className="text-xs text-[black] font-semibold">{location}</h1>
    </div>
  );
};

export default LocationButton;
// bg-[#98fb98]