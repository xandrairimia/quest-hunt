import clsx from "clsx";

export default function AddQuest(props) {
  return (
    <button
      className={clsx(
        "bg-blood text-3xl w-full h-full py-2 border-red border-x-6 border-y-6 shadow-4xl shadow-red text-white",
        props.className,
      )}
    >
      Add Quest
      <div class="w-full border-4 border-orange relative bottom-12"></div>
    </button>
  );
}
