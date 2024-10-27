export const createParkingSessionQuery = ({
  isSessionEnded,
  limit,
  offset,
  sessionEndedAtTo,
  sessionStartedAtFrom,
  vehicleType,
}: {
  isSessionEnded: "true" | "false" | "-1";
  limit: number;
  offset: number;
  sessionEndedAtTo?: string;
  sessionStartedAtFrom: string;
  vehicleType: "CAR" | "MOTOR" | "-1";
}): string => {};
