export type VehicleType = "CAR" | "MOTOR";

export type ParkingSpace = {
  parkingSpaceId: number;
  isOccupied: boolean;
  occupancy: number;
  capacity: number;
  vehicleType: VehicleType;
};

export type ParkingSession = {
  parkingSessionId: string;
  parkingSpaceId: number;
  isSessionEnded: boolean;
  sessionLengthInHoursMinutes: number;
  sessionStartedAt: string;
  sessionEndedAt: string;
  vehicleLicensePlate: string;
  vehicleType: VehicleType;
};

export type ParkingSessionIsEnded = "true" | "false" | "-1";
export type ParkingSessionFormVehicle = VehicleType | "-1";
export type ParkingSessionFormKeys =
  | "sessionStartedAtFrom"
  | "sessionEndedAtTo"
  | "isSessionEnded"
  | "vehicleType";
