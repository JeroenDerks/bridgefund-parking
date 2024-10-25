import { Card } from "components/Card";
import React from "react";
import * as i from "types";
import { vehicleTypeTitle } from "utils/text";

export function ParkingOverview({ parkingSpaces }: ParkingOverviewProps) {
  return (
    <Card>
      <h2 className="mb-4">Occupancy rate per parking space</h2>
      <div className="flex w-full justify-between">
        {parkingSpaces.map(({ vehicleType, capacity, occupancy }, index) => (
          <div key={index} className="pr-4">
            <h4 className="font-bold text-lg">
              {vehicleTypeTitle(vehicleType)}
            </h4>
            <p>
              Available:{" "}
              <span className="font-bold">{capacity + occupancy}</span>
            </p>
            <p>
              Capacity: <span className="font-bold">{capacity}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs mt-4 text-gray-400">
        The rate of occupancy does not match the active parking sessions. Please
        interpret this data carefully.
      </p>
    </Card>
  );
}

type ParkingOverviewProps = {
  parkingSpaces: i.ParkingSpace[];
};
