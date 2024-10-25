import { getParkingSpaces } from "lib/parking-spaces";
import { ParkingOverview } from "modules/ParkingOverview";

export default async function DashboardPage() {
  const parkingSpaces = await getParkingSpaces();

  return (
    <>
      <ParkingOverview {...{ parkingSpaces }} />
    </>
  );
}
