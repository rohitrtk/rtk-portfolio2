import { useState, ReactNode } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Carousel
} from "@material-tailwind/react";
import { ExpandMore } from "@mui/icons-material";
import { a, useSpring } from "@react-spring/web";
import useInvertRotation from "@hooks/useInvertRotation";

import Test1 from "@assets/images/kk-1.png";
import Test2 from "@assets/images/kk-2.png";
import Test3 from "@assets/images/kk-3.png";

export default function ProjectMenu() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ProjectDropdown title={"Project 1"} />
      <ProjectDropdown title={"Project 2"} />
      <ProjectDropdown title={"Project 3"} />
    </div>
  );
}

interface ProjectDropProps {
  title: string;
  children?: ReactNode;
}

function ProjectDropdown({ title }: ProjectDropProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);

  const invertionProps = useInvertRotation(open);

  return (
    <Accordion open={open} className="w-full">
      <AccordionHeader
        onClick={toggleOpen}
        className="flex flex-row justify-start text-dt-light-blue hover:text-dt-orange border-b-dt-light-blue">
        <Typography variant="h4" className="font-body font-bold">
          {title}
        </Typography>
        <a.div style={{ ...invertionProps }}>
          <ExpandMore fontSize="large" />
        </a.div>
      </AccordionHeader>
      <AccordionBody>
        <ProjectBody />
      </AccordionBody>
    </Accordion>
  );
}

function ProjectBody() {
  return (
    <div className="">
      <Carousel className="w-1/2 float-left mb-4 mr-4">
        <img src={Test1} />
        <img src={Test2} />
        <img src={Test3} />
      </Carousel>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est felis,
        congue in consectetur eget, placerat elementum dui. Proin vehicula sit
        amet nisl in egestas. Nam mattis vel metus ut ullamcorper. Nulla
        pharetra nisi non neque commodo euismod. Quisque nec arcu id metus
        vestibulum ultricies in ut arcu. Quisque mollis congue turpis, ac
        tristique dui ultrices vitae. Quisque eget efficitur nisl, eu aliquet
        sapien. Integer elementum tincidunt magna eu accumsan. Mauris
        scelerisque orci mauris, at varius metus sollicitudin sit amet. Aliquam
        tempus vitae dolor eget convallis. Duis tempus, nunc ac pulvinar
        convallis, nulla mi lobortis augue, at lobortis ligula diam vitae nisi.
        Cras turpis leo, vulputate ac elit feugiat, convallis interdum quam. Sed
        a blandit metus. Pellentesque tempus nunc nec dictum fringilla.
        Phasellus et faucibus massa, dapibus suscipit augue. Donec non sem ut
        neque venenatis mattis ac at metus. Nam sed pellentesque ex. Sed non
        risus vitae orci hendrerit iaculis a eget augue. Donec rhoncus, odio a
        rutrum luctus, arcu mauris pretium tellus, sed dapibus mauris felis a
        augue. Donec risus ante, porta eget justo vitae, convallis eleifend
        nisi. Sed sollicitudin libero eget diam interdum rhoncus. Donec tempus
        est sed magna vehicula molestie. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Donec luctus, enim sit amet posuere suscipit, mauris elit
        auctor neque, nec faucibus lectus enim in nunc. Aenean consequat
        elementum quam quis vehicula. Nam ultricies vitae risus a faucibus.
        Quisque at dignissim orci, sed cursus purus. Morbi et rhoncus tortor,
        nec imperdiet mi. Aliquam sodales risus sit amet aliquet porttitor.
        Integer nec elit at lacus tempor varius. Cras lobortis ante et massa
        laoreet, at porta sapien blandit. Sed sodales, nunc ac dapibus
        consectetur, dolor sem vestibulum augue, scelerisque iaculis risus felis
        eget mi. Curabitur id augue ac nunc sagittis tincidunt ut nec magna.
        Maecenas felis nibh, tristique ut commodo vehicula, gravida a tortor.
        Nunc maximus mauris faucibus, cursus lectus ut, posuere enim. Sed
        lacinia viverra justo, eu eleifend velit convallis nec. Mauris efficitur
        urna ac mi blandit, non imperdiet eros varius. Mauris eu nisl non purus
        consectetur iaculis a nec lorem. Praesent volutpat ullamcorper purus,
        vitae pellentesque sem eleifend ac. Etiam tempor est massa, a faucibus
        mauris eleifend in. Aenean tempus felis turpis, non suscipit ipsum
        facilisis at. Quisque fermentum dui neque, ac rutrum sapien luctus ut.
        Aenean at elit feugiat, semper magna at, euismod nunc. Aenean bibendum
        augue non urna finibus, sit amet viverra elit dapibus. Praesent nec
        cursus massa, non rutrum augue. Curabitur nisi urna, dapibus at arcu ut,
        commodo tempus risus.
      </Typography>
    </div>
  );
}
