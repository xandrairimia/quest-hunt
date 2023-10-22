import {
  ArrowRightCircleIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import AddQuest from "./AddQuest";
import ButtonInOut from "./ButtonInOut";
import Container from "./Container";
import Journal from "./Journal";
import Pages from "./Pages";
import Statistics from "./Statistics";
import ToDo from "./ToDo";

export default function Home(props) {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex sm:flex-row w-full h-full lg:px-20 md:px-12 sm:px-4 xs:px-2 py-20 gap-4 xs:flex-col">
        <div className="flex flex-col w-1/4 gap-4">
          <Container isFiller={true} title="Quest Menu">
            <div>
              <img
                src="src/assets/questhunt-logo.svg"
                className="h-full flex p-8"
              ></img>
            </div>
            <div class="flex flex-col gap-8 w-full h-full px-4">
              <div class="w-full rounded-sm border-2 border-orange"></div>
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
              <div className="w-full rounded-sm border-2 border-orange bottom-3"></div>
            </div>
          </Container>
          <Container
            className="h-40 px-8 py-10 flex items-center"
            title="Add Quest"
          >
            <AddQuest className="w-full"></AddQuest>
          </Container>
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <Container className="p-6" title="Quest Statistics">
            <Statistics></Statistics>
          </Container>
          <Container isFiller={true} title="Quest Journals">
            <div className="flex flex-col gap-8 p-10 items-center w-full h-full">
              <div class="flex xl:flex-row gap-8 sm:flex-col w-full h-full">
                <Journal className="bg-yellow" name="Main Quests">
                  <ExclamationCircleIcon className="w-8 h-8 text-red"></ExclamationCircleIcon>
                </Journal>
                <Journal className="bg-orange" name="Daily Quests">
                  <SunIcon className="w-8 h-8 text-red"></SunIcon>
                </Journal>
              </div>
              <div class="flex xl:flex-row gap-8 sm:flex-col w-full h-full">
                <Journal className="bg-blood" name="Side Quests">
                  <ArrowRightCircleIcon className="w-8 h-8 text-red"></ArrowRightCircleIcon>
                </Journal>
                <Journal className="bg-blue" name="Create Journal">
                  <PlusCircleIcon className="w-8 h-8 text-red"></PlusCircleIcon>
                </Journal>
              </div>
            </div>
          </Container>
        </div>
        <div className="flex flex-col w-1/4">
          <Container isFiller={true} title="Active Quests">
            <div class="flex flex-col gap-4 xl:px-6 sm:px-2 w-full h-full">
              <div className="py-6">
                <AddQuest className="w-full h-full"></AddQuest>
              </div>
              <div className="flex flex-col py-2 gap-4">
                <h1 className="text-red text-3xl w-full h-hull">Main Quests</h1>
                <ToDo title="To Do"></ToDo>
              </div>
              <div className="flex flex-col py-2 gap-4">
                <h1 className="text-red text-3xl w-full h-hull">
                  Daily Quests
                </h1>
                <ToDo title="To Do"></ToDo>
                <ToDo title="To Do"></ToDo>
              </div>
              <div className="flex flex-col py-2 gap-4">
                <h1 className="text-red text-3xl w-full h-hull">Side Quests</h1>
                <ToDo title="To Do"></ToDo>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <ButtonInOut className="w-44" onClick={() => navigate("/")}>
        Log Out
      </ButtonInOut>
    </div>
  );
}
