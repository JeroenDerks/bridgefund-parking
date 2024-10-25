import { getParkingSpaces } from "utils/parking-spaces";

export default async function DashboardPage() {
  const parkingSpaces = await getParkingSpaces();

  return (
    <>
      {parkingSpaces?.map((parkingSpace) => (
        <p>{parkingSpace.parkingSpaceId}</p>
      ))}
    </>
  );
}
