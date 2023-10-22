import clsx from "clsx";

export default function ButtonInOut(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={clsx(
          "bg-yellow text-2xl rounded w-40 h-12 leading-3 border-red border-x-2 border-y-2 shadow-3xl shadow-red text-red",
          props.className,
        )}
      >
        {props.children}
      </button>
    </>
  );
}
