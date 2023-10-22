import clsx from "clsx";

export default function AddQuest(props) {
  return (
    <button
      className={clsx(
        "bg-blood text-3xl w-40 h-16 py-2 border-red border-x-6 border-y-6 shadow-4xl shadow-red text-white",
        props.className,
      )}
    >
      Add Quest
      <div class="w-full border-4 border-orange relative bottom-11"></div>
    </button>
  );
}
