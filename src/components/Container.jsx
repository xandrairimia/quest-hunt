import clsx from "clsx";

export default function Container(props) {
  return (
    <div
      className={clsx(
        "flex flex-col bg-yellow p-2 gap-2",
        props.isFiller && "h-full",
      )}
    >
      <div className="flex flex-row gap-2">
        <div //star
          className="bg-white border-4 flex justify-center border-orange w-9 h-8"
        >
          <img src="src/assets/star.svg"></img>
        </div>
        <div //title
          className="bg-white text-orange border-4 border-orange w-full text-left px-4"
        >
          {props.title}
        </div>
      </div>
      <div
        className={clsx(
          "bg-white border-4 border-orange p-2",
          props.isFiller && "h-full",
          props.className,
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
