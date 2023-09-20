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
    title: "Marquee Printing",
    href: "marquee-printing",
    year: 2023,
    description: `For my first freelance gig, I had to create a webpage as a part of Marquee Design & Printing's rebranding. The primary role for the webpage
    was to improve the experience for both clients and Marquee when it came to ordering custom printed floors. I was fortunate enough to learn some new skills whilst creating
    this project as I opted to use the new shadcn UI library as well as react-hook-forms and Zod to handle the form submissions.`,
    sections: [
      `Developing this project for Marquee proved to be an amazing experience as I got to use the new server components by Next combined with the power of TypeScript. This allowed me to
      improve the page load times and improve SEO.`,
      `It was also a little bit of a challenge as when I started this project, I wanted to use all of these fancy animations
      either by using react-spring or Motion Framer; becuase of how new the server components were, these animation libraries just weren't compatible so I had to write the animations from scratch.`
    ],
    images: [
      "/marqueeprinting/1",
      "/marqueeprinting/2",
      "/marqueeprinting/3",
      "/marqueeprinting/4",
      "/marqueeprinting/5",
      "/marqueeprinting/6",
      "/marqueeprinting/7",
      "/marqueeprinting/8",
      "/marqueeprinting/9"
    ],
    tools: [
      tools.HTML,
      tools.CSS,
      tools.TypeScript,
      tools.React,
      tools.NextJS,
      tools.Tailwind
    ]
  },
  {
    title: "Student Registration Form",
    href: "student-registration-form",
    year: 2022,
    description: `During my time at Six Nations Polytechnic, I had to design a registration system similiar to that of OUAC. I had to learn a bunch of technologies that I had never used before
    such as PHP, Bootstrap, and MySQL. The goal of this project was to have graduating high school students apply through this website, rather than through OUAC. This way, SNP would have greater
    control over the students who were to be accepted and rejected to the school.`,
    sections: [
      `Developing a student registration app for Six Nations Polytechnic proved to be a rewarding experience, as I harnessed the power of a LAMP (Linux, Apache, MySQL, PHP) stack on the backend, combined with HTML, CSS, JavaScript, Bootstrap, and jQuery on the frontend. Opting for PHP as the backend scripting language came down to its robustness. While C#, Java, and Node.js are excellent alternatives, PHP's rich ecosystem of libraries, vast community support, and seamless integration with MySQL made it an ideal choice for this project. Leveraging PHP, I seamlessly handled user registrations, logins, and data management, ensuring a secure and efficient user experience.`,
      `In crafting the frontend of the student registration app, the trio of MySQL, Bootstrap, and jQuery emerged as key components. MySQL, a relational database management system, facilitated efficient data storage and retrieval, ensuring seamless management of student information. Bootstrap, a versatile frontend framework, expedited the design process with its responsive grid system and pre-styled components, resulting in a polished and intuitive user interface. The incorporation of jQuery enriched user interactions by simplifying event handling and DOM manipulation, enhancing the app's responsiveness and user engagement.`,
      `My choice of PHP over other backend languages was driven by its well-established reputation, while the adoption of MySQL, Bootstrap, and jQuery was guided by their ability to enhance efficiency, aesthetics, and interactivity. These technologies collectively transformed the student registration app into a dynamic and user-friendly platform, highlighting the power of the LAMP stack in synergy with HTML, CSS, JavaScript, Bootstrap, and jQuery to deliver a comprehensive solution for student management needs.`
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
      `Creating a Krispy Kreme clone was an exciting journey that allowed me to delve into modern web development using Astro, TypeScript, and Tailwind. Astro's innovative approach to building static sites with dynamic capabilities intrigued me from the start. Leveraging its seamless integration of server-side rendering and client-side interactivity, I embarked on recreating the beloved Krispy Kreme website.`,
      `The process of implementing the Krispy Kreme clone taught me the power of declarative UI in Astro. By composing components using Astro's structured markup, I effortlessly rendered dynamic content while maintaining a high level of performance. TypeScript, the statically typed superset of JavaScript, provided a safety net against runtime errors and allowed for better code organization. Additionally, the combination of Astro and Tailwind offered me a streamlined development experience, enabling me to craft pixel-perfect designs with minimal effort. The responsive design principles of Tailwind ensured that the clone looked and functioned flawlessly across various screen sizes.`,
      `My choice of these technologies was driven by their complementary strengths. Astro's ability to build statically-rendered sites with client-side interactivity allowed me to achieve both performance and dynamic functionality. TypeScript's type checking ensured a more maintainable codebase, while Tailwind expedited the styling process, granting me more time to focus on the intricacies of the clone. In the end, the creation of the Krispy Kreme clone served as a testament to the capabilities of Astro, TypeScript, and Tailwind, showcasing their collective potential to streamline development and deliver delightful user experiences.`,
      `I also like donuts.`
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
      `Embarking on the journey to create a social media photo sharing application akin to Instagram, I harnessed the power of Next.js, TypeScript, Tailwind, MongoDB, Node.js, Express.js, Redux, and TensorFlow to bring my vision to life. With a unique twist, this platform centered exclusively around my favorite breed of dog, Pomeranians. Leveraging the comprehensive capabilities of Next.js and TypeScript, I crafted a dynamic and responsive user interface that seamlessly adapted to various devices, ensuring an optimal user experience. Utilizing Tailwind, I expedited the frontend development process by effortlessly styling components and layouts, resulting in a polished and visually appealing interface.`,
      `The standout feature of this application lay in its image recognition technology. I integrated this innovative mechanism to ensure that users could only upload photos of Pomeranians, aligning with the app's niche focus. By using image recognition to verify the content before posting, I upheld the uniqueness of the platform and established a quality standard for the shared content. Through the integration of Node.js and Express.js on the backend, I designed a robust and secure system that handled user authentication, photo uploads, and database interactions, ensuring a seamless user journey from image submission to feed display.`,
      `The choice of Next.js as the frontend framework was driven by its exceptional performance and server-side rendering capabilities, which expedited content delivery and enhanced user experience. MongoDB emerged as the perfect database solution, seamlessly handling the storage of user profiles, photo metadata, and image recognition results. Its flexibility and scalability empowered me to accommodate future expansion and user engagement seamlessly. In crafting this Instagram-like platform, Next.js and MongoDB formed a powerful duo, allowing me to merge modern frontend development with efficient data management for a delightful and niche-specific social media experience.`
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
      `Embarking on the exciting endeavor of building an application to view 3D models from League of Legends, I harnessed the synergy of React, TypeScript, Tailwind, Redux, Supabase, and Three.js to bring the virtual world of the game to life. I incorporated two third-party open-source applications to acquire the essential glTF files, enriching the application with an extensive library of intricate 3D models. Additionally, I integrated a third-party API that efficiently queried data about the diverse characters within the League of Legends universe, enabling users to explore and appreciate the intricacies of each character's design.`,
      `The heart of the application's interactivity and visual appeal resided in Three.js, a powerful JavaScript library for creating 3D graphics. Through React and TypeScript, I orchestrated a seamless integration of the 3D models, ensuring that users could effortlessly navigate and examine the characters from all angles. The decision to incorporate Tailwind facilitated the rapid development of a visually cohesively, albeit simple, responsive user interface.`,
      `One of the pivotal elements that shaped the application's effectiveness was Redux, a state management tool that allowed me to handle the diverse states of the application with precision. By centralizing the application's states and actions, I created a smooth and intuitive user journey, granting users control over their exploration of the League of Legends characters. From selecting specific characters to altering viewing perspectives, Redux seamlessly orchestrated the application's behaviour, elevating the overall user experience.`,
      `In this innovative venture, React, TypeScript, Tailwind, Redux, Supabase, and Three.js converged to construct an immersive platform for exploring 3D models from the League of Legends universe. Through the amalgamation of open-source applications and APIs, users gained access to a vast array of character models, while Redux deftly managed the application's diverse states. This endeavour underscored the potential of modern web technologies to bring virtual worlds to life, providing enthusiasts with a dynamic and visually captivating platform for exploring their favourite game's intricacies.`
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
      `In preparation for a pivotal presentation on the intricate relationship between mathematics and computer graphics, I embarked on creating a small yet impactful C++ and OpenGL application. With a focus on elucidating the profound role mathematics plays in shaping visual effects, I designed this app to serve as a tangible demonstration of these concepts in action. My motivation was to illuminate how seemingly abstract mathematical constructs materialize into captivating graphical transformations that underpin modern computer graphics.`,
      `The crux of the application centered around the application of matrix multiplication to represent fundamental transformations: translations, rotations, and scalings. Through carefully crafted C++ code, I showcased how matrices could elegantly capture these transformations, translating intricate mathematical operations into visual effects on screen. This visual representation was not only illuminating for my presentation's audience but also served as a personal realization of the tangible power embedded within mathematical abstractions.`,
      `Moreover, I delved into the realm of OpenGL shaders to elucidate the illusion of lighting in computer graphics. By implementing shaders that harnessed mathematical equations to simulate lighting effects, I showcased how algorithms intricately calculated the interplay of light, surfaces, and angles to produce the illusion of depth, texture, and realism. This practical manifestation of complex mathematical principles into interactive visuals not only enriched my presentation but also left an indelible mark on my understanding of the profound synergy between mathematics and the captivating world of computer graphics.`,
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
      `In an endeavor to hone my CSS skills and embrace the world of responsive web design, I embarked on the creation of a Starbucks landing page clone using React. This project was driven by my aspiration to master the art of crafting visually appealing and seamless user interfaces. By meticulously recreating the aesthetic of a Starbucks landing page, I delved deep into the intricacies of CSS, perfecting layout structures, typography, color schemes, and responsive design principles. This hands-on experience allowed me to not only refine my proficiency in CSS but also gain insights into how to replicate real-world design patterns effectively. As a result, this undertaking served as an immersive playground for enhancing my web development capabilities and brought me one step closer to becoming a well-rounded front-end developer.`
    ],
    images: ["/starbucksclone/1", "/starbucksclone/2", "/starbucksclone/3"],
    tools: [tools.React, tools.TypeScript, tools.CSS],
    repo: "https://github.com/rohitrtk/starbucks-landing-clone"
  }
];

export default projects;
