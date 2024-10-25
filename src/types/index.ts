export type VehicleType = "CAR" | "MOTOR" | null;

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
