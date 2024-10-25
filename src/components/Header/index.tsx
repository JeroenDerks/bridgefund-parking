import { SubmitButton } from "components/SubmitButton";
import { redirect } from "next/navigation";
import { logout } from "utils";
import { ROUTES } from "utils/enums";

export const Header = () => {
  const handleLogout = async () => {
    "use server";
    await logout();
    redirect(ROUTES.HOME);
  };

  return (
    <div className=" h-10 bg-gray-600 px-10 py-2 justify-between items-center flex">
      <h6 className="font-bold">ParkingBusiness</h6>
      <form action={handleLogout}>
        <SubmitButton>Log out</SubmitButton>
      </form>
    </div>
  );
};
