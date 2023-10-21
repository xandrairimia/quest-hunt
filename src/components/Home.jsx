import { useNavigate } from "react-router-dom";
import ButtonInOut from "./ButtonInOut";
import Container from "./Container";
import Pages from "./Pages";

export default function Home(props) {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/4">
          <Container title="Quest Menu">
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
              <div className="w-60 h-0 rounded-sm border-4 border-orange relative left-4 top-3"></div>
            </div>
          </Container>
          <Container title="Add Quest">
            <ButtonInOut className="w-44" onClick={() => navigate("/")}>
              Log Out
            </ButtonInOut>
          </Container>
        </div>
        <div className="flex flex-col w-1/2">
          <Container title="Quest Menu">
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
              <div className="w-60 h-0 rounded-sm border-4 border-orange relative left-4 top-3"></div>
            </div>
          </Container>
          <Container title="Add Quest">
            <ButtonInOut className="w-44" onClick={() => navigate("/")}>
              Log Out
            </ButtonInOut>
          </Container>
        </div>
        <div className="flex flex-col w-1/4">
          <Container title="Quest Menu">
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
              <div className="w-60 h-0 rounded-sm border-4 border-orange relative left-4 top-3"></div>
            </div>
          </Container>
          <Container title="Add Quest">
            <ButtonInOut className="w-44" onClick={() => navigate("/")}>
              Log Out
            </ButtonInOut>
          </Container>
        </div>
      </div>
      <ButtonInOut className="w-44" onClick={() => navigate("/")}>
        Log Out
      </ButtonInOut>
    </div>
  );
}
