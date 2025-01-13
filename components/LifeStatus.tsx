import { CharacterStatus } from "../interfaces/interfaces";

interface LifeStatusProps {
  status: CharacterStatus;
}

export default function LifeStatus({ status }: LifeStatusProps) {
  const fillColor = `bg-${status.toLowerCase()}`;
  return (
    <div
      className={`py-2 px-6 mt-6 mb-6 w-24 flex justify-center rounded-full ${fillColor}`}
    >
      {status === CharacterStatus.UNKNOWN ? "Unkown" : status}
    </div>
  );
}
