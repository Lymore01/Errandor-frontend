import Button from "../../components/ui/Button";
import Errandor from "../dashboard/Errandor";

const Profile = () => {
  return (
    <Errandor showCallButton={false}>
      <div className="w-[100px]">
        <Button href="/errandor/1/edit" title="Edit" />
      </div>
    </Errandor>
  );
};

export default Profile;
