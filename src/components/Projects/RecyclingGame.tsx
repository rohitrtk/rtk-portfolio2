import { useState } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";
import Tooltip from "@components/UI/Tooltip";

import AngularIcon from "@assets/icons/angular.svg";
import TypeScriptIcon from "@assets/icons/typescript.svg";
import NodeIcon from "@assets/icons/node.svg";
import CordovaIcon from "@assets/icons/cordova.svg";
import IonicIcon from "@assets/icons/ionic.svg";
import FirebaseIcon from "@assets/icons/firebase.svg";
import SourceCode from "@components/UI/SourceCode";

// Recylcing Game
const RecyclingGame = () => {
  const title = "Recycling Game";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip text="TypeScript">
            <img src={TypeScriptIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Angular">
            <img src={AngularIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Node">
            <img src={NodeIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Cordova">
            <img src={CordovaIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Ionic">
            <img src={IonicIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Firebase">
            <img src={FirebaseIcon} className="w-10 h-10" />
          </Tooltip>
        </div>
        <div className="flex flex-row justify-center items-center w-full pt-5">
          <SourceCode locked={true} />
        </div>
        <div className="w-full text-left p-10 gap-5 [&>*]:m-5">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            For my Software Development course at the Univery of Toronto
            Mississauga, several students and I were tasked to work with
            Circular Toys (a start up company at UTM) to create a game targeted
            towards children, teaching them about the importance of recycling.
            Circular Toys already had an app containing three games, all of
            which were focused around recylcing and saving the planet, we were
            tasked with creating the fourth.
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project was a mobile app and so used a combination of Angular
              (and therefore TypeScript), Cordova, and Ionic. Fortunately,
              members of our group had access to both iOS and Android devices so
              we could debug along side runinng the app in browser.
            </span>
          </section>

          <section>
            Users of the app would be able to create an account and then choose
            any of the four games to play. The game that we developed involved
            various pieces of recyclables mixed in with garbage travelling off
            of a conveyor belt. The player would have to drag the recyclables
            into a recycling bin whilst not moving the garbage. If the player
            failed to move a recyclable into the bin, they lost a life.
            Similiarly, if a player dragged a piece of garbage into the bin,
            they lost a life. The player had 3 difficulties to choose from, with
            speed and number of items increasing per difficulty.
          </section>

          <section>
            I was primarily incharge of some backend game logic and database
            management. Some of my tasks included managing the players high
            score, movement of recyclables, as well as refactoring the code to
            meet standards outlined by our professor. My teammates and I tracked
            these tasks on a Jira board and participated in daily scrum
            meetings.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default RecyclingGame;
