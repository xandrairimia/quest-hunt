import { useNavigate } from "react-router-dom";
import Logo from "./logo";

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="h-full w-full">
        <Logo className="absolute left-0 top-0" logo={"Quest Hunt"} />
        <button onClick={() => navigate("/")}>Log Out</button>
      </div>
    </>
  );
}
