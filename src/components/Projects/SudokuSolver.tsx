import { useState } from "react";

import Cover from "./Cover";
import Modal from "@components/UI/Modal";

import HTMLIcon from "@assets/icons/html.svg";
import CSSIcon from "@assets/icons/css.svg";
import TypeScriptIcon from "@assets/icons/typescript.svg";
import ReactIcon from "@assets/icons/react.svg";
import RustIcon from "@assets/icons/rust.svg";
import Tooltip from "@components/UI/Tooltip";
import SourceCode from "@components/UI/SourceCode";

// Sudoku Solver
const SudokuSolver = () => {
  const title = "Sudoku Solver";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-1 m-2">
      <Cover title={title} setModalOpen={setModalOpen} />

      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} title={title}>
        <div className="flex flex-row justify-center gap-5">
          <Tooltip text="HTML">
            <img src={HTMLIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="CSS">
            <img src={CSSIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="TypeScript">
            <img src={TypeScriptIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="React">
            <img src={ReactIcon} className="w-10 h-10" />
          </Tooltip>
          <Tooltip text="Rust">
            <img src={RustIcon} className="w-10 h-10" />
          </Tooltip>
        </div>
        <div className="flex flex-row justify-center items-center w-full pt-5">
          <SourceCode src="https://github.com/rohitrtk/sudoku-solver-app" />
        </div>
        <div className="w-full text-left p-10 gap-5 [&>*]:m-5">
          <section>
            <h3 className="text-xl underline">Goal</h3>
            This project's goal was mainly to create a Rest API. The user would
            provide a partially completed sudoku puzzle, and then be able to
            send this puzzle to the API to find the solution, if any.
          </section>

          <section>
            <h3 className="text-xl underline">Description</h3>
            <span className="bg-yellow-300 text-black">
              The project uses HTML, CSS, TypeScript, and React on the frontend
              and Rust on the backend.
            </span>
          </section>

          <section>
            Being a fan of systems languages and a fanatic of C++, I thought I'd
            give Rust a try. On the front end, the user is given a blank puzzle,
            which they can fill in numbers between 0 and 9. The user can then
            send the puzzle to the server which will calculate which numbers
            complete the puzzle or if there is no solution to the puzzle. If a
            solution exists, the new puzzle is returned from the server with the
            new numbers highlighted in green.
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default SudokuSolver;
