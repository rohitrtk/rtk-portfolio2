import { useSpring } from "@react-spring/web";

export default function useFadeIn() {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 }
    }),
    []
  );

  return props;
}
