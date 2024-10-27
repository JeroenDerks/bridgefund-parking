import * as i from "types";

export const SelectInput = ({
  handleChange,
  id,
  label,
  value,
  children,
}: SelectInputProps) => (
  <>
    <label htmlFor={id} className="inline-block">
      {label}
    </label>
    <select
      name={id}
      id={id}
      className="text-gray-950 ml-2 mr-8"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
    >
      {children}
    </select>
  </>
);

type SelectInputProps = {
  handleChange: (value: string) => void;
  id: i.ParkingSessionFormKeys;
  label: string;
  children: React.ReactNode[];
  value: string;
};
