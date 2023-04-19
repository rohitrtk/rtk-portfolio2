/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, _ as __astro_tag_component__ } from '../astro.38df0873.mjs';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Rohit Kisto</title>
	${renderHead($$result)}</head>
	<body class="bg-neutral-900 text-gray-400 m-1 scrollbar-hide">
		${renderComponent($$result, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/App.tsx", "client:component-export": "default" })}
	</body></html>`;
}, "/Users/rtk/Documents/Programming/rtk-portfolio2/src/pages/index.astro");

const $$file$1 = "/Users/rtk/Documents/Programming/rtk-portfolio2/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Stripe = () => /* @__PURE__ */ jsx("div", {
  className: "absolute overflow-hidden parallax-body top-20 -right-40 rotate-45 min-w-[800px] min-h-[60px] bg-neutral-600 opacity-30"
});
__astro_tag_component__(Stripe, "@astrojs/react");

const Error = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "w-screen min-h-screen h-auto flex flex-col bg-neutral-900 items-center justify-center sticky top-0 overflow-hidden gap-2",
    children: [/* @__PURE__ */ jsx(Stripe, {}), /* @__PURE__ */ jsx("div", {
      className: "justify-center items-center text-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col shadow-xl rounded-xl p-5 font-body text-xl md:text-3xl gap-2",
        children: [/* @__PURE__ */ jsx("p", {
          children: "The page you requested does not exist!"
        }), /* @__PURE__ */ jsx("a", {
          href: "/",
          className: "hover:text-neutral-300 text-md md:text-xl",
          children: "Return home"
        })]
      })
    })]
  });
};
__astro_tag_component__(Error, "@astrojs/react");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Rohit Kisto</title>
	${renderHead($$result)}</head>
	<body class="bg-neutral-900 text-gray-400 m-1 scrollbar-hide">
    ${renderComponent($$result, "Error", Error, {})}
	</body></html>`;
}, "/Users/rtk/Documents/Programming/rtk-portfolio2/src/pages/404.astro");

const $$file = "/Users/rtk/Documents/Programming/rtk-portfolio2/src/pages/404.astro";
const $$url = "/404";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
