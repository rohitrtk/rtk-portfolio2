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
  images: string[];
  tools: Tool[];
  repo?: string;
};

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
      "/studentregistrationform/1",
      "/studentregistrationform/2",
      "/studentregistrationform/3",
      "/studentregistrationform/4",
      "/studentregistrationform/5",
      "/studentregistrationform/6",
      "/studentregistrationform/7",
      "/studentregistrationform/8",
      "/studentregistrationform/9"
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
    images: [
      "/krispykremeclone/1",
      "/krispykremeclone/2",
      "/krispykremeclone/3",
      "/krispykremeclone/4",
      "/krispykremeclone/5"
    ],
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
    images: [
      "/pomstagram/1",
      "/pomstagram/2",
      "/pomstagram/3",
      "/pomstagram/4",
      "/pomstagram/5"
    ],
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
    images: [
      "/leaguechampviewer/1",
      "/leaguechampviewer/2",
      "/leaguechampviewer/3",
      "/leaguechampviewer/4"
    ],
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
    images: [
      "/mathproject/1",
      "/mathproject/2",
      "/mathproject/3",
      "/mathproject/4",
      "/mathproject/5",
      "/mathproject/6"
    ],
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
    images: ["/starbucksclone/1", "/starbucksclone/2", "/starbucksclone/3"],
    tools: [tools.React, tools.TypeScript, tools.CSS],
    repo: "https://github.com/rohitrtk/starbucks-landing-clone"
  }
];

export default projects;
