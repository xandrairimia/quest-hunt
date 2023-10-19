import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import Logo from "./logo";

export default function Register(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/register`;
    navigate(path);
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/");
  };
  //add logo
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
        <div>
          <FormField
            value={name}
            type="name"
            placeholder="your name"
            setter={setName}
          />
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
              Register
            </button>
          </p>
        </div>
      </form>
      <button
        className="relative xs:inset-y-[80px] sm:inset-y-[180px]"
        onClick={() => navigate("/")}
      >
        Log In Here
      </button>
    </div>
  );
}
