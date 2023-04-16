import GitHubIcon from "@assets/icons/github.svg";

interface Props {
  src?: string;
  locked?: boolean;
}

const SourceCode = ({ src, locked }: Props) => {
  return (
    <a
      className={`bg-neutral-800 rounded-lg p-4 flex flex-row hover:bg-neutral-700 w-1/3 ${
        locked ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      href={src}>
      <img src={GitHubIcon} className="w-6 h-6" />
      <span className="mx-4">Source Code</span>
    </a>
  );
};

export default SourceCode;
