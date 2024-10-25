export const ParkingSpotResident = ({ title }: ParkingSpotResidentProps) => (
  <div className="px-2 h-12 w-12 rounded-2xl flex align-middle justify-center items-center border border-gray-500">
    <div className="flex flex-col items-center">
      <p className="text-[8px]">Resident</p>
      <p className="m-0">{title}</p>
    </div>
  </div>
);

type ParkingSpotResidentProps = {
  title: string;
};
