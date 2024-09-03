import LocationButton from "./LocationButton";
import StatusButton from "./StatusButton";

export type ErrandCardProps = {
  title: string;
  description: string;
  whereTo: string;
  deadline: string;
  paymentPrice: number;
  town: string;
  exactLocation: string;
  statusBg: string;
  status: string;
  children: React.ReactNode;
  showStatus: boolean;
};

const ErrandCard = ({
  title,
  description,
  whereTo,
  deadline,
  paymentPrice,
  town,
  exactLocation,
  statusBg,
  status,
  children,
  showStatus = true,
}: ErrandCardProps) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-secondary h-auto rounded-md p-2">
      {/*  <div className="h-[100px] bg-[red] w-full">

    </div> */}
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-row gap-4">
        <LocationButton bg="bg-[#98fb98]" location={town} />
        <LocationButton bg="bg-[#98fb98]" location={exactLocation} />
      </div>
      <div className="">Where to: {whereTo}</div>
      <div className="">Deadline: {deadline}</div>
      <hr className="text-[#808080]" />
      {/* price */}
      <div className="flex flex-row justify-between">
        {showStatus && <StatusButton bg={statusBg} status={status} />}
        <h1 className="text-[orange] font-semibold">ksh.{paymentPrice}</h1>
      </div>
      {children}
      
    </div>
  );
};

export default ErrandCard;

// comp - #4CAF50
// canceled - #FF5252
// claimed - #2196F3
