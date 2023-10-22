export default function FormField(props) {
  return (
    <p className="py-2 flex flex-col">
      <div className="flex flex-row justify-center align-middle">
        <label className="tracking-widset flex w-40 text-3xl text-yellow">
          {props.type}
        </label>
        <input
          className="rounded border-2 bg-white border-orange px-4 py-4 h-10 text-xl leading-6"
          value={props.value}
          name={props.type}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.setter(e.target.value)}
        ></input>
      </div>
    </p>
  );
}
