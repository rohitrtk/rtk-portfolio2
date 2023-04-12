import Temp from "@assets/images/snp-1.png";

interface Props {
  title: string;
  toggleModal: () => void;
}

export const Cover = ({ title, toggleModal }: Props) => {
  return (
    <div
      className="relative cursor-pointer flex flex-col align-middle justify-center"
      onClick={() => {
        toggleModal();
      }}>
      <img
        className="h-full max-w-full rounded-lg"
        src={Temp}
        alt="SNP Project"
      />
      <div className="rounded-lg flex flex-col text-center align-middle justify-center absolute w-[100%] h-full top-0 opacity-75 bg-neutral-900">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Cover;
