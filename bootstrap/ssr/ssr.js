import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts().then((data) => setProducts(data));
  }, []);
  console.log(products);
  let productList = [];
  products.forEach((product, index) => {
    productList.push(
      /* @__PURE__ */ jsx("div", { className: "w-full sm:w-1/2 lg:w-1/3 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: "https://placehold.co/600x400", alt: "Post Image", className: "w-full h-48 object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: product.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis." }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-500 hover:underline", children: "See Details" })
        ] })
      ] }) }, index)
    );
  });
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap -mx-4", children: productList });
};
Home.layout = (page) => /* @__PURE__ */ jsx(BaseLayout, { children: page });
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const app = "";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      return resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Test.jsx": __vite_glob_0_0 })).then((module) => {
        if ((module == null ? void 0 : module.default.layout) === void 0) {
          module.default.layout = BaseLayout;
        }
        return module;
      });
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
