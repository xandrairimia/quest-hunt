import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import FormField from "./FormField";
import Logo from "./logo";

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
    <div>
      <div>
        <Logo
          className="relative xs:inset-y-[100px] sm:inset-y-[180px]"
          logo={"Quest Hunt"}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative xs:inset-y-[20px] sm:inset-y-[140px]"
      >
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
        <p>
          <button type="submit" className="relative top-[20px]">
            Log In
          </button>
        </p>
      </form>
      <button
        className="relative xs:inset-y-[80px] sm:inset-y-[180px]"
        onClick={() => navigate("/register")}
      >
        Register Here
      </button>
    </div>
  );
}
