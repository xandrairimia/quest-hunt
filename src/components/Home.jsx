import { useNavigate } from "react-router-dom";
import Container from "./Container";
import Pages from "./Pages";

export default function Home(props) {
  let navigate = useNavigate();

  return (
    <div>
      <Container>
        <h2 className="relative top-4 right-20">Quest Menu</h2>
        <img
          src="src/assets/star.svg"
          className="relative top-[-5px] left-4"
        ></img>
        <div>
          <img
            src="src/assets/questhunt-logo.svg"
            className="object-scale-down max-w-[80%] relative top-[-36px] left-10"
          ></img>
        </div>
        <div class="grid grid-cols-1 p-8 gap-4 relative top-[-120px] left-6">
          <div class="w-60 h-0 rounded-sm border-4 border-orange relative left-4 bottom-3"></div>
          <div>
            <Pages>All Journals</Pages>
          </div>
          <div>
            <Pages>Active Quests</Pages>
          </div>
          <div>
            <Pages>Completed Quests</Pages>
          </div>
          <div>
            <Pages>Timeline</Pages>
          </div>
          <div class="w-60 h-0 rounded-sm border-4 border-orange relative left-4 top-3"></div>
        </div>
      </Container>
      {/* <Logo className="fixed top-0 left-0 right-0" logo={"Quest Hunt"} /> */}
      <button onClick={() => navigate("/")}>Log Out</button>
    </div>
  );
}
