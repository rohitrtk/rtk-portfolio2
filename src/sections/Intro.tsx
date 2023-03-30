import Trail from "@components/Trail.jsx";
import { a, useSpring } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

const Intro = () => {
  const imgSpring = useSpring({
    config: { mass: 5, friction: 500, tension: 1000 },
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
    delay: 1500
  });

  return (
    <>
      <div className="flex flex-col">
        <Trail
          value="Rohit"
          styleString="text-6xl md:text-9xl font-text font-bold"
        />

        <Trail
          value="Kisto"
          styleString="text-6xl md:text-9xl font-text font-bold"
          delay={500}
        />

        <Trail
          value="Software Developer"
          styleString="text-2xl md:text-3xl font-text"
          delay={1000}
        />
      </div>

      <a.div style={imgSpring} className="flex flex-start justify-center">
        <img
          className="rounded-full border border-gray-200 w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          src="/placeholder-avatar.png"
        />
      </a.div>
    </>
  );
};

export default Intro;
