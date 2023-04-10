import { Avatar, Tooltip } from "flowbite-react";
import { useMemo } from "react";

interface Props {
  icon: string;
  label: string;
}

const getIcon = (icon: string) => {
  console.log("get icon");
  switch (icon.toLowerCase()) {
    case "php":
      return <Avatar img="./icons/php.svg" />;
    case "javascript":
      return <Avatar img="./icons/javascript.svg" />;
    case "aframe":
      return <Avatar img="./icons/aframe.svg" />;
    case "bootstrap":
      return <Avatar img="./icons/bootstrap.svg" />;
    case "mysql":
      return <Avatar img="./icons/mysql.svg" />;
    case "azure":
      return <Avatar img="./icons/azure.svg" />;
    case "cpanel":
      return <Avatar img="./icons/cpanel.svg" />;
    case "html":
      return <Avatar img="./icons/html.svg" />;
    case "css":
      return <Avatar img="./icons/css.svg" />;
    case "react":
      return <Avatar img="./icons/react.svg" />;
    case "astro":
      return <Avatar img="./icons/astro.svg" />;
    case "next":
      return <Avatar img="./icons/next.svg" />;
    case "typescript":
      return <Avatar img="./icons/typescript.svg" />;
    case "chakra":
      return <Avatar img="./icons/chakraui.svg" />;
    case "tailwind":
      return <Avatar img="./icons/tailwindcss.svg" />;
    case "angular":
      return <Avatar img="./icons/angular.svg" />;
    case "ionic":
      return <Avatar img="./icons/ionic.svg" />;
    case "corova":
      return <Avatar img="./icons/cordova.svg" />;
    case "nodejs":
      return <Avatar img="./icons/node.svg" />;
    case "firebase":
      return <Avatar img="./icons/firebase.svg" />;
    case "rust":
      return <Avatar img="./icons/rust.svg" />;
    case "cordova":
      return <Avatar img="./icons/cordova.svg" />;
    default:
      console.error("Unknown icon!");
      return <></>;
  }
};

const ProgrammingIcon = ({ icon, label }: Props) => {
  const iconAvatar = useMemo(() => getIcon(icon), [icon]);

  return <Tooltip content={label}>{iconAvatar}</Tooltip>;
};

export default ProgrammingIcon;
