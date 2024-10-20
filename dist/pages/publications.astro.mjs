import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D2flkjTc.mjs';
import 'html-escaper';
import { P as Publication, N as NavBar } from '../chunks/NavBar_D1JCVDQl.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import bibtexParse from 'bibtex-parse-js';
export { renderers } from '../renderers.mjs';

const BibTexParser = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/publications.bib").then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load BibTeX file");
      }
      return response.text();
    }).then((data) => {
      console.log("BibTeX file content:", data);
      try {
        const parsedData = bibtexParse.toJSON(data);
        console.log("Parsed BibTeX data:", parsedData);
        setArticles(parsedData);
      } catch (error) {
        console.error("Error parsing BibTeX:", error);
      }
    }).catch((error) => {
      console.error("Error loading BibTeX:", error);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Research Publications" }),
    articles.map((article, index) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }, children: [
      /* @__PURE__ */ jsx("h3", { children: article.entryTags.title }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Author:" }),
        " ",
        article.entryTags.author
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Year:" }),
        " ",
        article.entryTags.year
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Note:" }),
        " ",
        article.entryTags.note ? article.entryTags.note : "Not provided"
      ] })
    ] }, index))
  ] });
};

const $$Publications = createComponent(($$result, $$props, $$slots) => {
  const publications = [
    {
      title: "Tile 1",
      authors: "A",
      arxivLink: "https://arxiv.org/",
      image: "image.png"
    },
    {
      title: "Title 2",
      authors: "B",
      arxivLink: "https://arxiv.org/",
      image: "image.png"
    }
  ];
  return renderTemplate`<html> ${renderComponent($$result, "NavBar", NavBar, {})}<title>Leblanc Publications</title> ${maybeRenderHead()}<body> <h1>Publications</h1> <div> ${renderComponent($$result, "BibTexParser", BibTexParser, {})} ${publications.map((pub) => renderTemplate`${renderComponent($$result, "Publication", Publication, { "title": pub.title, "authors": pub.authors, "arxivLink": pub.arxivLink, "image": pub.image })}`)} </div> </body></html>`;
}, "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/publications.astro", void 0);

const $$file = "/Users/jiminryu/Desktop/Brown/FullStack/leblanc-lab/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
