export const ParkingSpotMotor = ({ title }: ParkingSpotMotorProps) => (
  <div className="h-10 w-16 px-2 flex align-middle justify-center items-center border border-gray-700">
    <div className="flex flex-col items-center">
      <p className="text-[8px]">Motor</p>
      <p className="m-0">{title}</p>
    </div>
  </div>
);

type ParkingSpotMotorProps = {
  title: string;
};
