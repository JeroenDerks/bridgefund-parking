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
  sessionEndedAtTo: string;
  sessionStartedAtFrom: string;
  vehicleType: "CAR" | "MOTOR" | "-1";
}): string => {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    sessionStartedAtFrom,
  });

  if (sessionEndedAtTo && sessionEndedAtTo !== "-1") {
    params.append("sessionEndedAtTo", sessionEndedAtTo);
  }
  if (isSessionEnded !== "-1") {
    params.append("isSessionEnded", isSessionEnded);
  }
  if (vehicleType !== "-1") {
    params.append("vehicleType", vehicleType);
  }

  return params.toString();
};
