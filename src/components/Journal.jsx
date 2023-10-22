import clsx from "clsx";

export default function Journal(props) {
  return (
    <div
      className={clsx(
        "w-full h-full border-4 text-3xl text-red flex items-end p-6 justify-end border-red shadow-3xl",
        props.className,
      )}
    >
      {props.children}
      {props.name}
    </div>
  );
}
