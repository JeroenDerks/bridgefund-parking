import * as i from "types";

export function vehicleTypeTitle(vehicleType: i.VehicleType) {
  if (vehicleType === null) return "Resident";
  if (vehicleType === "CAR") return "Car";
  if (vehicleType === "MOTOR" || vehicleType === "MOTORCYCLE") return "Motor";
}
