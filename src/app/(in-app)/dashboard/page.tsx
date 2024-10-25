import { getParkingSessions } from "lib/parking-sessions";
import { getParkingSpaces } from "lib/parking-spaces";
import { ParkingOverview } from "modules/ParkingOverview";
import { ParkingSessions } from "modules/ParkingSessions";

export default async function DashboardPage() {
  const [parkingSpaces, parkingSessions] = await Promise.all([
    getParkingSpaces(),
    getParkingSessions(),
  ]);

  return (
    <>
      <ParkingOverview {...{ parkingSpaces }} />
      <ParkingSessions {...{ parkingSessions }} />
    </>
  );
}
