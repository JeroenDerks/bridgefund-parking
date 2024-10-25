import { Card } from "components/Card";
import { ParkingSessionsTable } from "./ParkingSessionsTable";
import * as i from "types";

export function ParkingSessions({ parkingSessions }: ParkingSessionsProps) {
  parkingSessions.forEach(({ vehicleType }) => console.log(vehicleType));
  return (
    <Card className="mt-12" title="Parking sessions">
      <ParkingSessionsTable {...{ parkingSessions }} />
    </Card>
  );
}

type ParkingSessionsProps = {
  parkingSessions: i.ParkingSession[];
};
