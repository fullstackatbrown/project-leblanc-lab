import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../chunks/astro/server_D2flkjTc.mjs';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> ${maybeRenderHead()}<div className="App"> ${renderComponent($$result, "NavBar", NavBar, {})} <header className="App-header"> <img${addAttribute(logo, "src")} className="App-logo" alt="logo"> </header> </div> </html>`;
}, "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/home.astro", void 0);

const $$file = "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
