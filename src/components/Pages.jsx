export default function Pages(props) {
  return (
    <div className="@container-normal w-[260px] border-red border-x-2 border-y-2 shadow-3xl shadow-red text-red text-2xl text-left pl-6 bg-yellow">
      {props.children}
    </div>
  );
}
