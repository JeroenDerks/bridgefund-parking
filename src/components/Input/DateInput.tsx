import * as i from "types";

export const DateInput = ({
  handleChange,
  id,
  label,
  value,
}: DateInputProps) => (
  <>
    <label htmlFor={id} className="inline-block">
      {label}
    </label>
    <input
      type="date"
      name={id}
      className="text-gray-950 ml-2 mr-8"
      onChange={(e) => handleChange(e.target.value)}
      {...{ value, id }}
    />
  </>
);

type DateInputProps = {
  handleChange: (value: string) => void;
  id: i.ParkingSessionFormKeys;
  label: string;
  value: string;
};
