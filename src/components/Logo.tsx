import { a, useSpring, useChain, useSpringRef } from "@react-spring/web";

const Logo = () => {
  const styleGreenRef = useSpringRef();
  const styleGreen = useSpring({
    ref: styleGreenRef,
    from: { width: 0, height: 55 },
    to: { width: 400, height: 55 },
    config: {
      duration: 3000
    }
  });

  const styleBlueRef = useSpringRef();
  const styleBlue = useSpring({
    ref: styleBlueRef,
    from: { height: 0, width: 56 },
    to: { height: 400, width: 56 }
  });

  const styleYellowRef = useSpringRef();
  const styleYellow = useSpring({
    ref: styleYellowRef,
    from: { width: 0, height: 56 },
    to: { width: 400, height: 56 }
  });

  useChain([styleGreenRef, styleBlueRef, styleYellowRef]);

  return (
    <a.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="400"
      height="400"
      viewBox="0 0 400 400"
      className="-z-20">
      <a.image
        width="55"
        height="236"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAADsAQMAAADq7KzpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEXyAAAAAAD9PQHdAAAAAXRSTlPqADnTAAAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAXSURBVDjLY2AYBaNgFIyCUTAKRgG1AQAHYAABoOpUEwAAAABJRU5ErkJggg=="
      />
      <a.image
        style={{
          width: "200px",
          minHeight: "55px",
          height: "55px",
          maxHeight: "55px"
        }}
        width="200"
        height="55"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAA3AQMAAAAYH45tAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEU6cyMAAAAMcwfLAAAAAXRSTlPqADnTAAAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAZSURBVEjH7cEBDQAAAMKg909tDwcUAACcGwr1AAH3ShDRAAAAAElFTkSuQmCC"
      />
      <a.image
        x="344"
        style={styleBlue}
        width="56"
        height="400"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAGQAQMAAADBcDFqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUgFLwAAABgD3yZAAAAAXRSTlPqADnTAAAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVEjH7cExAQAAAMKg9U9tCy+gAAAAPgYMgAAB6z57GQAAAABJRU5ErkJggg=="
      />
      <a.image
        y="346"
        style={styleYellow}
        width="400"
        height="54"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAA2AQMAAADTQ13IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEXWsEcAAAB3BC5tAAAAAXRSTlPhl+sKiAAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVEjH7cEBDQAAAMKg909tDjegAADgyQAKwgABC08xPQAAAABJRU5ErkJggg=="
      />
      <a.image
        y="236"
        width="55"
        height="164"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAACkAQMAAAAJ5yToAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEXyAAAAAAD9PQHdAAAAAXRSTlPqADnTAAAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAUSURBVDjLY2AYBaNgFIyCUYANAAAFIAAB4uzlkwAAAABJRU5ErkJggg=="
      />
    </a.svg>
  );
};

export default Logo;
