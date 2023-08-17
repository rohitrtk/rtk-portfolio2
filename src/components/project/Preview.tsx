import BlurImage from "@components/common/BlurImage";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  previewImage: string;
  href: string;
}

export default function Preview({ title, desc, previewImage, href }: Props) {
  return (
    <div className="w-full gap-5 flex md:flex-row flex-col justify-center items-start">
      <div className="w-full h-full flex flex-col">
        <Typography
          variant="h3"
          className="font-primary text-dt-blue underline">
          <Link className="hover:text-dt-orange" href={href}>
            {title}
          </Link>
        </Typography>

        <Typography variant="h5" className="font-primary text-dt-blue">
          {desc}
        </Typography>

        <Typography>
          <Link className="hover:text-dt-orange underline" href={href}>
            Read More
          </Link>
        </Typography>
      </div>

      <div className="w-full h-full overflow-hidden">
        <BlurImage
          alt=""
          src={previewImage}
          width="1920"
          height="960"
          className="unselectable"
        />
      </div>
    </div>
  );
}
