import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonInOut from "./ButtonInOut";
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
    <div className="flex flex-col items-center pt-60">
      <div>
        <Logo logo={"Quest Hunt"} />
      </div>
      <form onSubmit={handleSubmit}>
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
          <div className="flex flex-col items-center pt-12 gap-12">
            <ButtonInOut type="submit">Register</ButtonInOut>
            <ButtonInOut onClick={() => navigate("/")}>Log In Here</ButtonInOut>
          </div>
        </div>
      </form>
    </div>
  );
}
