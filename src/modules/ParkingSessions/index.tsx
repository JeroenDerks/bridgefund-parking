import { Card } from "components/Card";
import * as i from "types";
import { formatDate } from "utils/date";
import { vehicleTypeTitle } from "utils/text";

export function ParkingSessions({ parkingSessions }: ParkingSessionsProps) {
  parkingSessions.forEach(({ vehicleType }) => console.log(vehicleType));
  return (
    <Card className="mt-12" title="Parking sessions">
      <table className="border-spacing-4 w-full">
        <thead>
          <tr>
            <th align="left">License</th>
            <th align="left">Vehicle</th>
            <th align="left">Parking space id</th>
            <th align="left">Start</th>
            <th align="left">End</th>
          </tr>
        </thead>
        <tbody>
          {parkingSessions.map(
            (
              {
                vehicleLicensePlate,
                vehicleType,
                parkingSpaceId,
                sessionStartedAt,
                sessionEndedAt,
              },
              index
            ) => (
              <tr key={index}>
                <td>{vehicleLicensePlate}</td>
                <td>{vehicleTypeTitle(vehicleType)}</td>
                <td>{parkingSpaceId}</td>
                <td>{formatDate(sessionStartedAt)}</td>
                <td>{formatDate(sessionEndedAt)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}

type ParkingSessionsProps = {
  parkingSessions: i.ParkingSession[];
};
