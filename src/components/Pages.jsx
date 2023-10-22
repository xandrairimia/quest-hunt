export default function Pages(props) {
  return (
    <div className="w-full border-red border-x-2 border-y-2 shadow-3xl shadow-red text-red text-2xl text-left pl-6 bg-yellow">
      {props.children}
    </div>
  );
}
