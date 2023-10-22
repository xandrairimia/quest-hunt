import clsx from "clsx";

export default function Pages(props) {
  return (
    <button
      className={clsx(
        "lg:text-3xl md:text-2xl sm:text-xl xs:text-xs w-full border-red border-x-2 border-y-2 shadow-3xl shadow-red text-red text-left pl-6 xs:pl-2 bg-yellow",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
