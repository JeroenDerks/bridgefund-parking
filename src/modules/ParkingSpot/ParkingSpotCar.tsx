export const ParkingSpotCar = ({ title }: ParkingSpotCarProps) => (
  <div className="h-16 rounded-sm w-12 px-2 flex align-middle justify-center items-center border border-gray-400">
    <div className="flex flex-col items-center">
      <p className="text-[8px]">Car</p>
      <p className="m-0">{title}</p>
    </div>
  </div>
);

type ParkingSpotCarProps = {
  title: string;
};
