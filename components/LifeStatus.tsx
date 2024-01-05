interface LifeStatusProps {
  status: string | undefined;
}

export default function LifeStatus({ status }: LifeStatusProps) {
  console.log("el status...", status);
  const fillColor = status ? `bg-${status.toLowerCase()}` : "bg-unknown";
  return (
    <div
      className={`py-2 px-6 mt-6 mb-6 w-24 flex justify-center rounded-full ${fillColor}`}
    >
      {status === "unknown" ? "Unkown" : status}
    </div>
  );
}
