export const OccupancyIndicator = ({
  capacity,
  available,
}: OccupancyIndicatorProps) => {
  const availableWidth = (200 / capacity) * available;
  const width = availableWidth < 0 ? availableWidth * -1 : availableWidth;
  const backgroundColor = availableWidth < 0 ? "red" : "green";

  return (
    <div className="w-[200px] bg-slate-600 h-4">
      <div style={{ width, backgroundColor }} className="h-full"></div>
    </div>
  );
};

type OccupancyIndicatorProps = {
  capacity: number;
  available: number;
};
