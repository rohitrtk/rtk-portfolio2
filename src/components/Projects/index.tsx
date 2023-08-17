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
  href: string;
  description: string;
};

const tools = {
  HTML: {
    name: "HTML",
    icon: <SiHtml5 color="#E34F26" size={48} />
  },
  CSS: { name: "CSS", icon: <SiCss3 color="#1572B6" size={48} /> },
  JavaScript: {
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" size={48} />
  },
  Bootstrap: {
    name: "Bootstrap",
    icon: <SiBootstrap color="#7952B3" size={48} />
  },
  PHP: { name: "PHP", icon: <SiPhp color="#777BB4" size={48} /> },
  jQuery: {
    name: "jQuery",
    icon: <SiJquery color="#0769AD" size={48} />
  },
  MySQL: {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" size={48} />
  },
  cPanel: {
    name: "cPanel",
    icon: <SiCpanel color="#FF6C2C" size={48} />
  },
  TypeScript: {
    name: "TypeScript",
    icon: <SiTypescript color="#3178C6" size={48} />
  },
  Astro: {
    name: "Astro",
    icon: <SiAstro color="#FF5D01" size={48} />
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss color="#06B6D4" size={48} />
  },
  React: {
    name: "React",
    icon: <SiReact color="#61DAFB" size={48} />
  },
  NextJS: {
    name: "Next",
    icon: <SiNextdotjs color="#FFFFFF" size={48} />
  },
  NodeJS: {
    name: "Node",
    icon: <SiNodedotjs color="#339933" size={48} />
  },
  Express: {
    name: "Express",
    icon: <SiExpress color="#FFFFFF" size={48} />
  },
  MongoDB: {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" size={48} />
  },
  Redux: {
    name: "Redux",
    icon: <SiRedux color="#764ABC" size={48} />
  },
  TensorFlow: {
    name: "TensorFlow",
    icon: <SiTensorflow color="#FF6F00" size={48} />
  },
  ThreeJS: {
    name: "Three",
    icon: <SiThreedotjs color="#FFFFFF" size={48} />
  },
  CPP: {
    name: "C++",
    icon: <SiCplusplus color="#00599C" size={48} />
  },
  OpenGL: {
    name: "OpenGL",
    icon: <SiOpengl color="#5586A4" size={48} />
  }
};

const projects: Project[] = [
  {
    title: "Student Registration Form",
    href: "student-registration-form",
    year: 2022,
    description: `During my time at Six Nations Polytechnic, I had to design a registration system similiar to that of OUAC. I had to learn a bunch of technologies that I had never used before
    such as PHP, Bootstrap, and MySQL. The goal of this project was to have graduating high school students apply through this website, rather than through OUAC. This way, SNP would have greater
    control over the students who were to be accepted and rejected to the school.`,
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
    href: "krispy-kreme-clone",
    year: 2023,
    description: `Upon visiting the Krispy Kreme website one day, I had noticed some bugs in their site with regards to responsiveness. I figured I could do a better job,
    so I attempted to do so. It also gave me an excuse to practice my Tailwind skills.`,
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
    href: "pomstagram",
    year: 2023,
    description: `Before I had started this project, I had an itch to make a project with a MERN stack. I wanted to create some kind of social
    media app but also wanted it to have something unique to it. Pomeranians are my favourite breed of dog, so I decided to make the app focused around
    them - the user can only upload photos of pomeranians, and that is enforced via image recognition.`,
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
    href: "league-champ-viewer",
    year: 2023,
    description: `League of legends has some of the best 3D models I've seen and I wanted to create a simple and straight forward app to show them off. This project was super fun, as I love using ThreeJS and React.`,
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
    title: "Mathematics in Graphics",
    href: "mathematics-in-graphics",
    year: 2023,
    description: `During my final year of undergrad, I took a course focused on writing mathematical essays. For my final project, I had to take one of my essays, and give a presentation on it. As the title suggest,
    my essay topic was mathematics in graphics. I figured it'd be nice to show off some of the code behind creating graphics, so I wrote this small OpenGL app.`,
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
    href: "starbucks-landing-clone",
    year: 2022,
    description: `Admittedly, my raw CSS skills aren't the best, I'd much rather use something like Tailwind or Bootstrap. That being said, I understand the importance of raw CSS, so in an effort
    to practice, I wrote this Starbucks landing page clone.`,
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
