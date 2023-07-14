"use client";

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

export type Project = {
  title: string;
  year: number;
  sections: string[];
  images: string[];
  tools: JSX.Element[];
};

const tools = {
  HTML: <SiHtml5 color="#E34F26" />,
  CSS: <SiCss3 color="#1572B6" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  Bootstrap: <SiBootstrap color="#7952B3" />,
  PHP: <SiPhp color="#777BB4" />,
  jQuery: <SiJquery color="#0769AD" />,
  MySQL: <SiMysql color="#4479A1" />,
  cPanel: <SiCpanel color="#FF6C2C" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  Astro: <SiAstro color="#FF5D01" />,
  Tailwind: <SiTailwindcss color="06B6D4" />,
  React: <SiReact color="#61DAFB" />,
  NextJS: <SiNextdotjs color="#61DAFB" />,
  NodeJS: <SiNodedotjs color="#339933" />,
  Express: <SiExpress color="#FFFFFF" />,
  MongoDB: <SiMongodb color="#47A248" />,
  Redux: <SiRedux color="#764ABC" />,
  TensorFlow: <SiTensorflow color="#FF6F00" />,
  ThreeJS: <SiThreedotjs color="#FFFFFF" />,
  CPP: <SiCplusplus color="#00599C" />,
  OpenGL: <SiOpengl color="#5586A4" />
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
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-1.png?alt=media&token=731db6f0-ae30-4e67-a4f0-ee4e591770c5",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-2.png?alt=media&token=2915357f-d04e-45e4-b3bf-0f35b51e7f22",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-3.png?alt=media&token=b5a82b37-a61e-4ebb-94b6-89bda0c7768c",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-4.png?alt=media&token=4b73f9f5-8001-4676-84a0-04fed33862b1",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-5.png?alt=media&token=d2f40415-ef90-459a-8b96-feedad8bbf85",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-6.png?alt=media&token=7a745ed9-e52c-46fe-9858-ee3342c3a824",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-7.png?alt=media&token=3fe445cf-ac68-4901-a61f-50e8c874f08c",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-8.png?alt=media&token=3ce92cbb-1142-4c19-a2b8-e319e9fe4d27",
      "https://firebasestorage.googleapis.com/v0/b/rohitkistodev-b976f.appspot.com/o/Student%20Registration%20Form%2Fsnp-9.png?alt=media&token=f63d21d0-39d3-4236-8cf8-3afc6ea921b3"
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
    sections: [],
    images: [],
    tools: [tools.Astro, tools.TypeScript, tools.HTML, tools.Tailwind]
  },
  {
    title: "Pomstagram",
    year: 2023,
    sections: [],
    images: [],
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
    ]
  },
  {
    title: "League Champ Viewer",
    year: 2023,
    sections: [],
    images: [],
    tools: [
      tools.React,
      tools.TypeScript,
      tools.Tailwind,
      tools.Redux,
      tools.ThreeJS
    ]
  },
  {
    title: "Computer Graphics in Mathematics",
    year: 2023,
    sections: [],
    images: [],
    tools: [tools.CPP, tools.OpenGL]
  },
  {
    title: "Starbucks Clone",
    year: 2022,
    sections: [],
    images: [],
    tools: [tools.React, tools.TypeScript, tools.CSS]
  }
];

export default projects;
