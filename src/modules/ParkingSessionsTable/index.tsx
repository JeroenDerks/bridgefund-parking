import { EndParkingSession } from "modules/EndParkingSession";
import * as i from "types";
import { formatDate } from "utils/date";
import { vehicleTypeTitle } from "utils/text";

const costPerHour = {
  CAR: 5,
  MOTOR: 3,
};

export function ParkingSessionsTable({
  parkingSessions,
}: ParkingSessionsProps) {
  const calcCost = ({
    parkingSpaceId,
    sessionLengthInHoursMinutes,
    vehicleType,
  }: {
    parkingSpaceId: number;
    sessionLengthInHoursMinutes: number;
    vehicleType: i.VehicleType;
  }) => {
    if (parkingSpaceId === 1) return "Resident";
    else {
      const hours = sessionLengthInHoursMinutes / 60;
      const price = hours * costPerHour[vehicleType];
      return `€ ${price.toFixed(2)}`;
    }
  };
  return (
    <table className="border-spacing-4 w-full">
      <thead>
        <tr>
          <th align="left">License</th>
          <th align="left">Vehicle</th>
          <th align="left">Space id</th>
          <th align="left">Start</th>
          <th align="left">End</th>
          <th align="left">Price</th>
        </tr>
      </thead>
      <tbody>
        {parkingSessions?.map(
          (
            {
              parkingSessionId,
              parkingSpaceId,
              sessionEndedAt,
              sessionLengthInHoursMinutes,
              sessionStartedAt,
              vehicleLicensePlate,
              vehicleType,
            },
            index
          ) => (
            <tr key={index}>
              <td>{vehicleLicensePlate}</td>
              <td>{vehicleTypeTitle(vehicleType)}</td>
              <td>{parkingSpaceId}</td>
              <td>{formatDate(sessionStartedAt)}</td>
              <td>
                {!sessionEndedAt ? (
                  <EndParkingSession {...{ parkingSessionId }} />
                ) : (
                  formatDate(sessionEndedAt)
                )}
              </td>
              <td>
                {calcCost({
                  parkingSpaceId,
                  sessionLengthInHoursMinutes,
                  vehicleType,
                })}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

type ParkingSessionsProps = {
  parkingSessions?: i.ParkingSession[];
};
