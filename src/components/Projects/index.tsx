import Cover from "./Cover";
import SRForm from "./SRForm";
import XRExperience from "./XRExperience";
import RecyclingGame from "./RecyclingGame";
import PhotoSharer from "./PhotoSharer";
import SudokuSolver from "./SudokuSolver";
import OGDemo from "./OGDemo";
import type { RefObject } from "react";

export const Project = {
  Cover,
  SRForm,
  XRExperience,
  RecyclingGame,
  PhotoSharer,
  SudokuSolver,
  OGDemo
};

export interface ProjectProps {
  toggleModal: (modalRef: RefObject<HTMLDivElement>) => void;
}
