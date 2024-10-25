import * as i from "types";

const residentLength = 50;
export const defaultResidentData: i.ParkingSpace[] = Array.from(
  Array(residentLength).keys()
).map((_, index) => generateDefaultData(index, "RESIDENT"));

const carLength = 80;
export const defaultCarData: i.ParkingSpace[] = Array.from(
  Array(carLength).keys()
).map((_, index) => generateDefaultData(residentLength + index, "CAR"));

const motorLength = 20;
export const defaultMotorData: i.ParkingSpace[] = Array.from(
  Array(motorLength).keys()
).map((_, index) =>
  generateDefaultData(residentLength + carLength + index, "MOTOR")
);

function generateDefaultData(
  parkingSpaceId: number,
  vehicleType: i.VehicleType
) {
  const isOccupied = Math.random() < 0.5;

  return {
    parkingSpaceId: parkingSpaceId + 1,
    isOccupied,
    occupancy: isOccupied ? 1 : 0,
    capacity: 1,
    vehicleType,
  };
}

export const defaultParkingSpaces = [
  ...defaultResidentData,
  ...defaultCarData,
  ...defaultMotorData,
];
