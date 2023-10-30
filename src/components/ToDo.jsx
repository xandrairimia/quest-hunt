import { PencilIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import ControlledCheckbox from "./Checkbox";

export default function ToDo(props) {
  return (
    <div
      className={clsx(
        "bg-yellow flex flex-col w-full h-1/2 pr-4 border-4 lg:text-2xl xs:text-sm border-red shadow-3xl shadow-red",
        props.className,
      )}
    >
      <div className="flex flex-row gap-4 h-full">
        <ControlledCheckbox
          className="h-full bg-yellow"
          // ripple={false}
          // containerProps={{
          //   className: "h-full bg-yellow",
          // }}
        />
        <div className="text-red flex items-center w-full">{props.title}</div>
        <button className="flex items-end">
          <PencilIcon className="w-4 h-full text-red"></PencilIcon>
        </button>
      </div>
    </div>
  );
}
