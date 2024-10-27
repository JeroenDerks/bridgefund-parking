import { useState } from "react";

export const EndParkingSession = ({
  parkingSessionId,
}: EndParkingSessionProps) => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const handleEndParkingSession = async () => {};

  return (
    <>
      <button
        onClick={() => setIsShowingModal(true)}
        className="bg-slate-700 px-2 py-1 text-xs rounded-sm"
      >
        End now
      </button>
      {isShowingModal && (
        <dialog open className="p-4 min-w-10 rounded-md">
          <div className="flex gap-4 w-full justify-between items-center">
            <h2 className="text-lg font-bold">End session</h2>
            <button autoFocus onClick={() => setIsShowingModal(false)}>
              x
            </button>
          </div>
          <p className="py-4">
            Are you sure you want to end this parking session?
          </p>

          <div className="flex w-full justify-between mt-8">
            <button
              className="bg-slate-200 border-gray-500 border px-2"
              onClick={() => setIsShowingModal(false)}
            >
              Cancel
            </button>
            <button className="bg-slate-200 border-red-500 text-red-500 border px-2">
              End session
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

type EndParkingSessionProps = {
  parkingSessionId: string;
};
