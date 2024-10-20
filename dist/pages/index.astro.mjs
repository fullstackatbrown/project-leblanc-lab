import { c as createComponent, r as renderTemplate, d as renderHead, a as renderComponent, e as createAstro } from '../chunks/astro/server_D2flkjTc.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import pkg from 'react-router-dom';
import { N as NavBar$1, P as Publication } from '../chunks/NavBar_D1JCVDQl.mjs';
export { renderers } from '../renderers.mjs';

function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx("header", { className: "App-header", children: /* @__PURE__ */ jsx("img", { src: logo, className: "App-logo", alt: "logo" }) })
  ] });
}

function Team() {
  return /* @__PURE__ */ jsx("div", {});
}

function Contact() {
  return /* @__PURE__ */ jsx("div", {});
}

const { BrowserRouter, StaticRouter, Routes, Route } = pkg;
function App({ location }) {
  const isServer = typeof window === "undefined";
  const [RouterComponents, setRouterComponents] = useState(null);
  useEffect(() => {
    import('react-router-dom').then((pkg2) => {
      setRouterComponents({
        BrowserRouter: pkg2.BrowserRouter,
        Routes: pkg2.Routes,
        Route: pkg2.Route
      });
    });
  }, []);
  if (!RouterComponents) {
    return null;
  }
  const { BrowserRouter: BrowserRouter2, Routes: Routes2, Route: Route2 } = RouterComponents;
  return isServer ? /* @__PURE__ */ jsxs(StaticRouter, { location, children: [
    /* @__PURE__ */ jsx(NavBar$1, {}),
    /* @__PURE__ */ jsxs(Routes2, { children: [
      /* @__PURE__ */ jsx(Route2, { path: "/home", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/team", element: /* @__PURE__ */ jsx(Team, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/publications", element: /* @__PURE__ */ jsx(Publication, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) })
    ] })
  ] }) : /* @__PURE__ */ jsxs(BrowserRouter2, { children: [
    /* @__PURE__ */ jsx(NavBar$1, {}),
    /* @__PURE__ */ jsxs(Routes2, { children: [
      /* @__PURE__ */ jsx(Route2, { path: "/home", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/team", element: /* @__PURE__ */ jsx(Team, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/publications", element: /* @__PURE__ */ jsx(Publication, {}) }),
      /* @__PURE__ */ jsx(Route2, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const location = Astro2.request.url;
  return renderTemplate`<html> <head><title>My Astro App</title><link rel="stylesheet" href="../components/App.css"><!-- Link to your CSS -->${renderHead()}</head> <body> ${renderComponent($$result, "App", App, { "location": location, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/components/App.jsx", "client:component-export": "default" })} <!-- Use the React component in the Astro page --> </body></html>`;
}, "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/index.astro", void 0);

const $$file = "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
