import * as i from "types";
import { ParkingSpotCar } from "./ParkingSpotCar";
import { ParkingSpotMotor } from "./ParkingSpotMotor";
import { ParkingSpotResident } from "./ParkingSpotResident";

export const ParkingSpot = ({ vehicleType, title }: ParkingSpotProps) => {
  if (vehicleType === "CAR") return <ParkingSpotCar {...{ title }} />;
  if (vehicleType === "MOTOR") return <ParkingSpotMotor {...{ title }} />;
  if (vehicleType === "RESIDENT") return <ParkingSpotResident {...{ title }} />;
  return null;
};
type ParkingSpotProps = {
  vehicleType: i.VehicleType;
  title: string;
};
