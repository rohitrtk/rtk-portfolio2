import LineAround from "./LineAround";
import { Typography } from "@lib/MT";

interface Props {
  text: string;
}

export default function LineTitle({ text }: Props) {
  return (
    <LineAround>
      <Typography
        variant="h1"
        className="p-0 text-center text-dt-light-blue mx-5 my-auto font-primary">
        {text}
      </Typography>
    </LineAround>
  );
}
