import { Card } from "components/Card";
import * as i from "types";

export function ParkingSessions({ parkingSessions }: ParkingSessionsProps) {
  return (
    <Card className="mt-12">
      <p>Parking sessions</p>
    </Card>
  );
}

type ParkingSessionsProps = {
  parkingSessions: i.ParkingSession[];
};
