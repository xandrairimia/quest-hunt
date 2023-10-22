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

export default function Home(props) {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4 py-8 gap-4">
      <div className="flex sm:flex-row w-full h-full lg:px-20 md:px-12 sm:px-4 xs:px-2 py-20 gap-4 xs:flex-col">
        <div className="flex flex-col w-1/4 gap-4">
          <Container isFiller={true} title="Quest Menu">
            <div>
              <img
                src="src/assets/questhunt-logo.svg"
                className="object-scale-down max-w-4/5 relative lg:bottom-6 md:bottom-0 sm:bottom-0 xs:-bottom-0"
              ></img>
            </div>
            <div class="flex flex-col gap-8 justify-center relative w-full lg:p-8 md:p-6 sm:p-2 xs:p-0 lg:bottom-16">
              <div class="w-full h-0 rounded-sm border-2 border-orange"></div>
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
              <div className="w-full h-0 rounded-sm border-2 border-orange bottom-3"></div>
            </div>
          </Container>
          <Container className="h-40 flex items-center" title="Add Quest">
            <AddQuest className="w-full"></AddQuest>
          </Container>
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <Container className="p-6" title="Quest Statistics">
            <Statistics></Statistics>
          </Container>
          <Container isFiller={true} title="Quest Journals">
            <div className="flex flex-col gap-4 items-center">
              <div class="flex md:flex-row gap-4 sm:flex-col">
                <Journal className="bg-yellow gap-4" name="Main Quests">
                  <ExclamationCircleIcon className="w-8 h-8 text-red"></ExclamationCircleIcon>
                </Journal>
                <Journal className="bg-orange gap-4" name="Daily Quests">
                  <SunIcon className="w-8 h-8 text-red"></SunIcon>
                </Journal>
              </div>
              <div class="flex md:flex-row gap-4 sm:flex-col">
                <Journal className="bg-blood gap-4" name="Side Quests">
                  <ArrowRightCircleIcon className="w-8 h-8 text-red"></ArrowRightCircleIcon>
                </Journal>
                <Journal className="bg-blue gap-4" name="Create Journal">
                  <PlusCircleIcon className="w-8 h-8 text-red"></PlusCircleIcon>
                </Journal>
              </div>
            </div>
          </Container>
        </div>
        <div className="flex flex-col w-1/4">
          <Container isFiller={true} title="Active Quests">
            <div class="flex flex-col gap-6 justify-center md:w-32 sm:w-22 xs:w-20">
              <div className="py-6">
                <h1 className="text-red text-3xl ms:w-60 sm:w-44 sm:text-md xs:text-sm xs:w-12">
                  Main Quests
                </h1>
                <Pages>To do</Pages>
              </div>
              <div className="py-6">
                <h1 className="text-red text-3xl ms:w-60 sm:w-44 sm:text-md xs:text-sm xs:w-12">
                  Daily Quests
                </h1>
                <Pages>to do</Pages>
              </div>
              <div className="py-6">
                <h1 className="text-red text-3xl ms:w-60 sm:w-44 sm:text-md xs:text-sm xs:w-12">
                  Side Quests
                </h1>
                <Pages>Cto do</Pages>
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
