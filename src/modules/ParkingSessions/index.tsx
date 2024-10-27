"use client";

import { useCallback, useEffect, useState } from "react";
import { Card } from "components/Card";
import { ParkingSessionsTable } from "./ParkingSessionsTable";
import { apiDate } from "utils/date";
import { getParkingSessions } from "lib/parking-sessions";
import * as i from "types";
import { createParkingSessionQuery } from "utils/query";
import { DateInput } from "components/Input/DateInput";
import { SelectInput } from "components/Input/Select";

const limit = 100;
const offset = 0;
const defaultStartDate = "2024-08-01";
const defaultEndDate = apiDate(Date.now());

export function ParkingSessions() {
  const [parkingSessions, setParkingSessions] = useState<i.ParkingSession[]>();
  const [sessionEndedAtTo, setEndDate] = useState(defaultEndDate);
  const [sessionStartedAtFrom, setStartDate] = useState(defaultStartDate);
  const [isSessionEnded, setIsSessionEnded] =
    useState<i.ParkingSessionIsEnded>("-1");
  const [vehicleType, setVehicleType] =
    useState<i.ParkingSessionFormVehicle>("-1");

  const getParkingSessionData = useCallback(async () => {
    const query = createParkingSessionQuery({
      limit,
      offset,
      sessionEndedAtTo,
      sessionStartedAtFrom,
      isSessionEnded,
      vehicleType,
    });
    const data = await getParkingSessions(query);
    setParkingSessions(data);
  }, [sessionStartedAtFrom, isSessionEnded, sessionEndedAtTo, vehicleType]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getParkingSessionData();
  };

  useEffect(() => {
    getParkingSessionData();
  }, [getParkingSessionData]);

  const handleEndDateChange = (newDate: string) => {
    setEndDate(newDate);
    setIsSessionEnded("true");
  };

  const handleIsEndedChange = (isEndedState: i.ParkingSessionIsEnded) => {
    if (isEndedState === "false") setEndDate("");
    setIsSessionEnded(isEndedState);
  };

  return (
    <Card className="mt-12" title="Parking sessions">
      <form className="flex mb-10">
        <DateInput
          handleChange={(val) => setStartDate(val)}
          id="sessionStartedAtFrom"
          label="Start"
          value={sessionStartedAtFrom}
        />
        <DateInput
          handleChange={(val) => handleEndDateChange(val)}
          id="sessionEndedAtTo"
          label="End"
          value={sessionEndedAtTo}
        />

        <SelectInput
          label="Has ended:"
          id="isSessionEnded"
          value={isSessionEnded}
          handleChange={(val) =>
            handleIsEndedChange(val as i.ParkingSessionIsEnded)
          }
        >
          <option value="-1">All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </SelectInput>

        <SelectInput
          label="Vehicle"
          id="vehicleType"
          value={vehicleType}
          handleChange={(val) =>
            setVehicleType(val as i.ParkingSessionFormVehicle)
          }
        >
          <option value="-1">All</option>
          <option value="CAR">Car</option>
          <option value="MOTOR">Motor</option>
        </SelectInput>

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <ParkingSessionsTable {...{ parkingSessions }} />
    </Card>
  );
}
