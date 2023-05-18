import {
  SiGithub,
  SiLeetcode,
  SiLinkedin
} from "@icons-pack/react-simple-icons";

const Socials = () => {
  return (
    <div className="flex flex-row pt-2 gap-4 justify-center items-center">
      <a href="https://www.linkedin.com/in/rohit-kisto/" target="_blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/rohitrtk" target="_blank">
        <SiGithub />
      </a>
      <a href="https://leetcode.com/rohitrtk/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default Socials;
