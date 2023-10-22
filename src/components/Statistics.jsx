import clsx from "clsx";

export default function Statistics(props) {
  return (
    <div
      className={clsx(
        "flex flex-row w-full h-full lg:gap-16 lg:text-xl sm:gap-4 sm:text-xs text-center bg-blood border-red border-4 justify-center p-4 shadow-3xl text-white",
        props.className,
      )}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">34</h1>
        <h1>Completed Quests</h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">34</h1>
        <h1>Active Quests</h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">3</h1>
        <h1>Journal Quests</h1>
      </div>
    </div>
  );
}
