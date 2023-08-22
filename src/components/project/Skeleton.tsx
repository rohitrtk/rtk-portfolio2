"use client";

import LineTitle from "@components/common/LineTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@lib/MT";
import Link from "next/link";

import usePageTransition from "@hooks/usePageTransition";
import { a } from "@react-spring/web";
import type { Project } from "@assets/ProjectData";
import Body from "./Body";
import { useRouter } from "next/navigation";

interface Props {
  project: Project;
}

export default function Skeleton({ project }: Props) {
  const pageStyle = usePageTransition();

  const router = useRouter();

  return (
    <a.div style={pageStyle} className="mt-20 w-3/4">
      <LineTitle text={project.title} />

      <div className="m-2 flex">
        <div
          className="flex items-center border-b border-dt-light-blue justify-center hover:text-dt-orange hover:border-dt-orange hover:cursor-pointer"
          onClick={() => {
            router.back();
          }}>
          <ArrowBackIcon />
          <Typography variant="h6">Go Back</Typography>
        </div>
      </div>

      <Body {...project} />
    </a.div>
  );
}
