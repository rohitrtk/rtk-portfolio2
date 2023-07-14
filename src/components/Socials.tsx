import {
  SiGithub,
  SiLinkedin,
  SiLeetcode
} from "@icons-pack/react-simple-icons";

export default function Socials() {
  return (
    <div className="w-full flex flex-row justify-around">
      <a href="https://github.com/rohitrtk" target="_blank">
        <SiGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/rohit-kisto/" target="_blank">
        <SiLinkedin size={24} />
      </a>
      <a href="https://leetcode.com/rohitrtk/" target="_blank">
        <SiLeetcode size={24} />
      </a>
    </div>
  );
}
