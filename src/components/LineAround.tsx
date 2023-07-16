interface Props {
  children: JSX.Element;
}

export default function LineAround({ children }: Props) {
  return (
    <div className="flex flex-row gap-0 justify-center items-center">
      <Line />
      {children}
      <Line />
    </div>
  );
}

function Line() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="min-h-[2px] max-h-[2px] min-w-full bg-dt-light-blue" />
    </div>
  );
}
