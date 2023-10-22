import clsx from "clsx";

export default function Journal(props) {
  return (
    <button
      className={clsx(
        "w-full h-full border-4 text-3xl text-red flex items-end p-6 justify-end border-red shadow-3xl",
        props.className,
      )}
    >
      <div className="flex items-center w-full gap-8">
        {props.children}
        {props.name}
      </div>
    </button>
  );
}
