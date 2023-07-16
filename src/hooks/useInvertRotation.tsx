import { useSpring } from "@react-spring/web";

export default function useInvertRotation(invert: boolean) {
  const [props] = useSpring(
    () => ({
      transform: `rotateX(${invert ? 180 : 0}deg)`
    }),
    [invert]
  );

  return props;
}
