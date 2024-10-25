"use client";

import { useEffect, useState } from "react";
import { Card } from "components/Card";
import { ParkingSessionsTable } from "./ParkingSessionsTable";
import { apiDate } from "utils/date";
import { getAccessToken } from "lib/getAccessToken";
import { getParkingSessions } from "lib/parking-sessions";
import * as i from "types";

const limit = "100";
const offset = "0";
const defaultStartDate = "2024-08-01";

export function ParkingSessions() {
  const [parkingSessions, setParkingSessions] = useState<i.ParkingSession[]>();
  const [sessionEndedAtTo, setEndDate] = useState(apiDate(Date.now()));
  const [sessionStartedAtFrom, setStartDate] = useState(defaultStartDate);
  const [isSessionEnded, setIsSessionEnded] = useState<string>("All");
  const [vehicleType, setVehicleType] = useState<string>("All");

  useEffect(() => {
    getParkingSessionData();
  }, []);

  const getParkingSessionData = async () => {
    const accessToken = await getAccessToken();

    let params = new URLSearchParams({ offset, limit, sessionStartedAtFrom });

    if (isSessionEnded !== "All") {
      params.append("isSessionEnded", isSessionEnded);
      if (isSessionEnded === "true") {
        params.append("sessionEndedAtTo", sessionEndedAtTo);
      }
    }
    if (vehicleType !== "All") params.append("vehicleType", vehicleType);
    const query = params.toString();
    const data = await getParkingSessions(accessToken, query);
    setParkingSessions(data);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getParkingSessionData();
  };

  return (
    <Card className="mt-12" title="Parking sessions">
      <form className="flex mb-10">
        <label htmlFor="sessionStartedAtFrom" className="inline-block">
          Start:
        </label>
        <input
          type="date"
          id="sessionStartedAtFrom"
          name="sessionStartedAtFrom"
          className="text-gray-950 ml-2 mr-8"
          onChange={(e) => setStartDate(e.target.value)}
          value={sessionStartedAtFrom}
        />
        <div>
          <label htmlFor="sessionEndedAtTo" className="inline-block">
            End:
          </label>
          <input
            type="date"
            id="sessionEndedAtTo"
            name="sessionEndedAtTo"
            className="text-gray-950 ml-2 mr-8"
            onChange={(e) => setEndDate(e.target.value)}
            value={sessionEndedAtTo}
          />
        </div>
        <label htmlFor="isSessionEnded" className="inline-block">
          Has ended:
        </label>
        <select
          name="isSessionEnded"
          id="isSessionEnded"
          className="text-gray-950 ml-2 mr-8"
          onChange={(e) => setIsSessionEnded(e.target.value)}
          value={isSessionEnded}
        >
          <option>All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label htmlFor="vehicleType" className="inline-block">
          Vehicle
        </label>
        <select
          name="vehicleType"
          id="vehicleType"
          className="text-gray-950 ml-2 mr-8"
          onChange={(e) => setVehicleType(e.target.value)}
          value={vehicleType}
        >
          <option value="All">All</option>
          <option value="CAR">Car</option>
          <option value="MOTOR">Motor</option>
        </select>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <ParkingSessionsTable {...{ parkingSessions }} />
    </Card>
  );
}
