import type { StaticImageData } from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiPhp,
  SiJquery,
  SiMysql,
  SiCpanel,
  SiTypescript,
  SiAstro,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTensorflow,
  SiThreedotjs,
  SiCplusplus,
  SiOpengl
} from "@icons-pack/react-simple-icons";

interface Tool {
  name: string;
  icon: JSX.Element;
}

export type Project = {
  title: string;
  year: number;
  sections: (string | JSX.Element)[];
  images: StaticImageData[];
  tools: Tool[];
  repo?: string;
};

// Ugly af until LQIP works with Next 13
import Img_KK1 from "@assets/images/kk-1.png";
import Img_KK2 from "@assets/images/kk-2.png";
import Img_KK3 from "@assets/images/kk-3.png";
import Img_KK4 from "@assets/images/kk-4.png";
import Img_KK5 from "@assets/images/kk-5.png";
import Img_PM1 from "@assets/images/pomstagram-1.png";
import Img_PM2 from "@assets/images/pomstagram-2.png";
import Img_PM3 from "@assets/images/pomstagram-3.png";
import Img_PM4 from "@assets/images/pomstagram-4.png";
import Img_PM5 from "@assets/images/pomstagram-5.png";
import Img_SNP1 from "@assets/images/snp-1.png";
import Img_SNP2 from "@assets/images/snp-2.png";
import Img_SNP3 from "@assets/images/snp-3.png";
import Img_SNP4 from "@assets/images/snp-4.png";
import Img_SNP5 from "@assets/images/snp-5.png";
import Img_SNP6 from "@assets/images/snp-6.png";
import Img_SNP7 from "@assets/images/snp-7.png";
import Img_SNP8 from "@assets/images/snp-8.png";
import Img_SNP9 from "@assets/images/snp-9.png";
import Img_LCV1 from "@assets/images/lcv-1.png";
import Img_LCV2 from "@assets/images/lcv-2.png";
import Img_LCV3 from "@assets/images/lcv-3.png";
import Img_LCV4 from "@assets/images/lcv-4.png";
import Img_SB1 from "@assets/images/sb-1.png";
import Img_SB2 from "@assets/images/sb-2.png";
import Img_SB3 from "@assets/images/sb-3.png";
import Img_MP1 from "@assets/images/mp-1.png";
import Img_MP2 from "@assets/images/mp-2.png";
import Img_MP3 from "@assets/images/mp-3.png";
import Img_MP4 from "@assets/images/mp-4.png";
import Img_MP5 from "@assets/images/mp-5.png";
import Img_MP6 from "@assets/images/mp-6.png";

const tools = {
  HTML: { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  CSS: { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  JavaScript: { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  Bootstrap: { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  PHP: { name: "PHP", icon: <SiPhp color="#777BB4" /> },
  jQuery: { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  MySQL: { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  cPanel: { name: "cPanel", icon: <SiCpanel color="#FF6C2C" /> },
  TypeScript: { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  Astro: { name: "Astro", icon: <SiAstro color="#FF5D01" /> },
  Tailwind: { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
  React: { name: "React", icon: <SiReact color="#61DAFB" /> },
  NextJS: { name: "Next", icon: <SiNextdotjs color="#FFFFFF" /> },
  NodeJS: { name: "Node", icon: <SiNodedotjs color="#339933" /> },
  Express: { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
  MongoDB: { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  Redux: { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  TensorFlow: { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  ThreeJS: { name: "Three", icon: <SiThreedotjs color="#FFFFFF" /> },
  CPP: { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  OpenGL: { name: "OpenGL", icon: <SiOpengl color="#5586A4" /> }
};

const projects: Project[] = [
  {
    title: "Student Regstration Form",
    year: 2022,
    sections: [
      `As a part of my time at Six Nations Polytechnic, I had to design a registration system similiar to OUAC, which is what high students use to apply
      to various post secondary institutes in Ontario, Canada. The goal was to have students apply directly to SNP, rather than through OUAC.`,
      `The project uses a LAMP stack (Linux, Apache, MySQL, PHP) on the backend together with HTML, CSS, and JavaScript with help from Bootstrap and jQuery on the frontend.`
    ],
    images: [
      Img_SNP1,
      Img_SNP2,
      Img_SNP3,
      Img_SNP4,
      Img_SNP5,
      Img_SNP6,
      Img_SNP7,
      Img_SNP8,
      Img_SNP9
    ],
    tools: [
      tools.HTML,
      tools.CSS,
      tools.JavaScript,
      tools.Bootstrap,
      tools.PHP,
      tools.jQuery,
      tools.MySQL,
      tools.cPanel
    ]
  },
  {
    title: "Krispy Kreme Clone",
    year: 2023,
    sections: [
      `I wanted to practice my tailwind skills, so I decided to clone the
      Krispy Kreme website because it is a relatively simple website,
      and I like donuts.`,
      `The project uses Astro for page routing, TypeScript for
      interactivity, and TailwindCSS for styling.`
    ],
    images: [Img_KK1, Img_KK2, Img_KK3, Img_KK4, Img_KK5],
    tools: [tools.Astro, tools.TypeScript, tools.HTML, tools.Tailwind],
    repo: "https://github.com/rohitrtk/krispy-kreme-clone"
  },
  {
    title: "Pomstagram",
    year: 2023,
    sections: [
      `My goal for this project to create a fullstack application where
      on the frontend, looked similiar to that of VSCO. For the backend,
      I wanted to create an API that would be able to check a user
      upload and determine if it was a Pomeranian. If the picture was a
      Pomeranian, the user would be allowed to post the photo, otherwise
      the user wouldn't be able to upload the photo.`,
      `The project uses a MERN (MongoDB, Express, React, Node) stack
      together with TensorFlow to verify user uploads.`
    ],
    images: [Img_PM1, Img_PM2, Img_PM3, Img_PM4, Img_PM5],
    tools: [
      tools.NextJS,
      tools.React,
      tools.TypeScript,
      tools.NodeJS,
      tools.Express,
      tools.MongoDB,
      tools.Redux,
      tools.Tailwind,
      tools.TensorFlow
    ],
    repo: "https://github.com/rohitrtk/pomstagram"
  },
  {
    title: "League Champ Viewer",
    year: 2023,
    sections: [
      `Being a fan of League of Legends, I thought it would be fun to create a web application
      to view the 3D models that are used in game, and also display a little about section for each model
      detailing a champions lore and abilities.`,
      `The project queries information regarding a champions lore and abilities from Riot Games' public API and queries
      the 3D models from my own database as the 3D models weren't available publically. I used various open source tools to convert the 3D models to a GLTF
      format to be shown by ThreeJS, and used some simple useEffect magic to make an API request to display champion information.`
    ],
    images: [Img_LCV1, Img_LCV2, Img_LCV3, Img_LCV4],
    tools: [
      tools.React,
      tools.TypeScript,
      tools.Tailwind,
      tools.Redux,
      tools.ThreeJS
    ],
    repo: "https://github.com/rohitrtk/league-champ-viewer"
  },
  {
    title: "Computer Graphics in Mathematics",
    year: 2023,
    sections: [
      `For one of my classes at UofT, I had to write a mathematical paper detailing the use of Computer Graphics in Mathematics, followed by
      giving a presentation. I thought it would be nice for my classmates to see a physical demonstration of the use, so I created this small C++ & OpenGL app.`,
      `In this application there are some simple controls using ImGui to perform transformations and change lighting through GLSL. In addition, I made use of assimp
      to import GLTF models to show something more interesting than a coloured cube.`,
      `I also made use of the wireframe option to add emphasis on the fact that any shape can be made up of triangles.`,
      <a
        className="underline text-dt-gold"
        href="https://drive.google.com/file/d/1OoxeiK6usWvNF271Sv9QLNmZUU_BSDmI/view?usp=drive_link"
        target="_blank">
        Here's a link to the paper if you'd like to read it.
      </a>
    ],
    images: [Img_MP1, Img_MP2, Img_MP3, Img_MP4, Img_MP5, Img_MP6],
    tools: [tools.CPP, tools.OpenGL],
    repo: "https://github.com/rohitrtk/MAT392-demo"
  },
  {
    title: "Starbucks Landing Clone",
    year: 2022,
    sections: [
      `Nothing more than a straight up clone of the Starbucks front page. I just wanted to practice my CSS skills and I happened to be drinking a Starbucks coffee.`,
      ``
    ],
    images: [Img_SB1, Img_SB2, Img_SB3],
    tools: [tools.React, tools.TypeScript, tools.CSS],
    repo: "https://github.com/rohitrtk/starbucks-landing-clone"
  }
];

export default projects;
