export const dynamic = "force-dynamic";
export const revalidate = 0;

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
