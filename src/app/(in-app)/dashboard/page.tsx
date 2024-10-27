import { getParkingSpaces } from "lib/parking-spaces";
import { ParkingOverview } from "modules/ParkingOverview";
import { ParkingSessions } from "modules/ParkingSessions";

export default async function DashboardPage() {
  const parkingSpaces = await getParkingSpaces();

  return (
    <>
      <ParkingOverview {...{ parkingSpaces }} />
      <ParkingSessions />
    </>
  );
}
