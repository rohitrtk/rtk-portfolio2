interface Props {
  text: string;
}

const Body = ({ text }: Props) => {
  return <p className="text-2xl font-text">{text}</p>;
};

export default Body;
