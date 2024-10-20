import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                         */
import { Link } from 'react-router-dom';

const Publication = ({ title, authors, arxivLink, image }) => {
  const boxStyle = {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    padding: "16px",
    marginBottom: "16px"
  };
  const imageStyle = {
    width: "20%",
    objectFit: "cover"
  };
  const infoStyle = {
    width: "80%",
    paddingLeft: "16px"
  };
  return /* @__PURE__ */ jsxs("div", { style: boxStyle, children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: title, style: imageStyle }),
    /* @__PURE__ */ jsxs("div", { style: infoStyle, children: [
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: authors }),
      /* @__PURE__ */ jsx("a", { href: arxivLink, target: "_blank", rel: "noopener noreferrer", children: "arXiv Link" })
    ] })
  ] });
};

function NavBar() {
  return /* @__PURE__ */ jsxs("nav", { className: "navbar", children: [
    /* @__PURE__ */ jsx("div", { className: "navbar-logo", children: /* @__PURE__ */ jsx("h1", { children: "LeBlanc Lab" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "navbar-links", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/home", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/team", children: "Team" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/publications", children: "Publications" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" }) })
    ] })
  ] });
}

export { NavBar as N, Publication as P };
