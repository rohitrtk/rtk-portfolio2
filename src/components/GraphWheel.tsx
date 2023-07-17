import { a, useSpring } from "@react-spring/web";
import BlurImage from "./BlurImage";

interface Props {
  center: string;
  items?: JSX.Element[];
}

export default function GraphWheel({ center, items }: Props) {
  return (
    <div className="min-w-full min-h-full relative justify-center items-center">
      <div className="flex justify-center items-center">
        <BlurImage
          src={center}
          width="400"
          height="400"
          alt=""
          className="rounded-full w-52 h-52 object-cover unselectable"
        />
        <Wheel items={items} />
      </div>
    </div>
  );
}

const rotationConfig = (counter: boolean = false) => ({
  from: { transform: "rotate(0deg)" },
  to: { transform: `rotate(${counter ? "-" : ""}360deg)` },
  loop: true,
  config: {
    duration: 20000
  }
});

function Wheel({ items }: Pick<Props, "items">) {
  if (!items) return <></>;

  const radius = 150;
  const angle = (2 * Math.PI) / items.length;

  const [spinProps] = useSpring(() => rotationConfig());
  const [counterRotationProps] = useSpring(() => rotationConfig(true));

  const calculatePositions = (index: number) => ({
    x: Math.cos(angle! * index) * radius,
    y: Math.sin(angle! * index) * radius
  });

  return (
    <a.div
      style={spinProps}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {items?.map((item, index) => {
        const { x, y } = calculatePositions(index);

        return (
          <a.div
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
            }}
            key={`graph-wheel-item-${index}`}>
            <a.div style={counterRotationProps}>{item}</a.div>
          </a.div>
        );
      })}
    </a.div>
  );
}
