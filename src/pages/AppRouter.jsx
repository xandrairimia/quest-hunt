import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./LogInForm";
import Register from "./RegisterForm";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
