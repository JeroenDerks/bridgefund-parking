"use client";

import { useEffect, useState } from "react";
import { Card } from "components/Card";
import { ParkingSessionsTable } from "./ParkingSessionsTable";
import * as i from "types";
import { apiDate } from "utils/date";
import { getAccessToken } from "lib/getAccessToken";
import { getParkingSessions } from "lib/parking-sessions";

const limit = "100";
const offset = "0";
const defaultStartDate = "2024-08-01";

export function ParkingSessions() {
  const [parkingSessions, setParkingSessions] = useState<i.ParkingSession[]>();
  const [sessionEndedAtTo, setEndDate] = useState(apiDate(Date.now()));
  const [sessionStartedAtFrom, setStartDate] = useState(defaultStartDate);

  useEffect(() => {
    getParkingSessionData();
  }, []);

  const getParkingSessionData = async () => {
    try {
      const accessToken = await getAccessToken();
      const params = new URLSearchParams({
        offset,
        limit,
        sessionStartedAtFrom,
        sessionEndedAtTo,
      });
      const query = params.toString();
      const data = await getParkingSessions(accessToken, query);
      setParkingSessions(data);
    } catch (error) {
      console.error("There was a problem fetching the parking sessions", error);
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getParkingSessionData();
  };

  return (
    <Card className="mt-12" title="Parking sessions">
      <form>
        <label htmlFor="sessionStartedAtFrom" className="w-[100px]">
          Start:
        </label>
        <input
          type="date"
          id="sessionStartedAtFrom"
          name="sessionStartedAtFrom"
          className="text-gray-950"
          onChange={(e) => setStartDate(e.target.value)}
          value={sessionStartedAtFrom}
        />
        <label htmlFor="sessionEndedAtTo">End:</label>
        <input
          type="date"
          id="sessionEndedAtTo"
          name="sessionEndedAtTo"
          className="text-gray-950"
          onChange={(e) => setEndDate(e.target.value)}
          value={sessionEndedAtTo}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <ParkingSessionsTable {...{ parkingSessions }} />
    </Card>
  );
}
