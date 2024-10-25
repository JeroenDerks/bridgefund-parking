"use client";

import { useState } from "react";
import { Card } from "components/Card";
import { ParkingSessionsTable } from "./ParkingSessionsTable";
import * as i from "types";

const defaultFilter = {
  startDate: "2024-10-01",
  endDate: "2024-10-01",
};
export function ParkingSessions() {
  const [parkingSessions, setParkingSessions] = useState([]);
  const [filters, setFilters] = useState(defaultFilter);

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  const handleFilterChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  console.log(filters);

  return (
    <Card className="mt-12" title="Parking sessions">
      <form onChange={(e) => handleFormChange(e)}>
        <div>
          <label htmlFor="startDate" className="w-[100px]">
            Start:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="text-gray-950"
            onChange={(e) => handleFilterChange("startDate", e)}
            value={filters.startDate}
          />
        </div>
        <label htmlFor="endDate">End:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          className="text-gray-950"
          onChange={(e) => handleFilterChange("endDate", e)}
          value={filters.endDate}
        />
      </form>
      <ParkingSessionsTable {...{ parkingSessions }} />
    </Card>
  );
}
