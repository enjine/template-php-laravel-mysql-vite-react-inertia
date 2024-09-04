import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function BaseLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "bg-blue-600 text-white p-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "My Awesome Store" }) }) }),
    /* @__PURE__ */ jsx("main", { className: "container mx-auto mt-8 p-4", children })
  ] });
}
const Home = () => {
  return /* @__PURE__ */ jsx(BaseLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -mx-4", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-1/2 lg:w-1/3 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/600x400", alt: "Post Image", className: "w-full h-48 object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Item Title 1" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis." }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-500 hover:underline", children: "See Details" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-1/2 lg:w-1/3 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/600x400", alt: "Post Image", className: "w-full h-48 object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Item Title 2" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis." }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-500 hover:underline", children: "See Details" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-1/2 lg:w-1/3 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "https://via.placeholder.com/600x400", alt: "Post Image", className: "w-full h-48 object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Item Title 3" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis." }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-500 hover:underline", children: "See Details" })
      ] })
    ] }) })
  ] }) });
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Test.jsx": __vite_glob_0_0 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
