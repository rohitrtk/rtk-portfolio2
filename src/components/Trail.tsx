import { useTrail, a } from "@react-spring/web";

interface Props {
  value: string;
  open?: boolean;
  delay?: number;
  styleString?: string;
}

const Trail = ({ value, open = true, delay = 0, styleString = "" }: Props) => {
  const trail = useTrail(1, {
    config: { mass: 5, friction: 500, tension: 1000 },
    opacity: open ? 1 : 0,
    delay: delay,
    x: open ? 20 : 200,
    from: { opacity: 0, x: 200 }
  });

  return (
    <div className="flex flex-row">
      {trail.map(({ ...style }, index) => {
        return (
          <a.div key={index} style={style}>
            <a.div className={`${styleString}`}>
              <h1>{value}</h1>
            </a.div>
          </a.div>
        );
      })}
    </div>
  );
};

export default Trail;
