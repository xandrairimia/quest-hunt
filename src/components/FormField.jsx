export default function FormField(props) {
  return (
    <p className="py-2">
      <label className="tracking-widset relative content-center p-12 text-3xl leading-6 text-yellow">
        {props.type}
      </label>
      <input
        className="rounded border-2 border-yellow px-[0.8rem] py-[0.3rem] text-xl leading-6"
        value={props.value}
        name={props.type}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.setter(e.target.value)}
      ></input>
    </p>
  );
}
