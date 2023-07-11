import { useTrail } from "@react-spring/web";

export default function useSlideIn(items: JSX.Element[]) {
  const [trails] = useTrail(
    items.length,
    () => ({
      from: { opacity: 0, x: 100 },
      to: { opacity: 1, x: 0 }
    }),
    []
  );

  return trails;
}
