import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ButtonInOut from "../components/ButtonInOut";
import FormField from "../components/FormField";
import Logo from "../components/logo";

export default function Login(props) {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center pt-60">
      <div>
        <Logo logo={"Quest Hunt"} />
      </div>
      <form onSubmit={handleSubmit}>
        <FormField
          value={email}
          type="email"
          placeholder="your@email.com"
          setter={setEmail}
        />
        <FormField
          value={pass}
          type="password"
          placeholder="******"
          setter={setPass}
        />
        <div className="flex flex-col items-center pt-12 gap-12">
          <ButtonInOut type="submit">Log In</ButtonInOut>
          <ButtonInOut onClick={() => navigate("/register")}>
            Register Here
          </ButtonInOut>
        </div>
      </form>
    </div>
  );
}
