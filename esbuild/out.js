import * as React from "react";
import * as Server from "react-dom/server";
import Hello from "./Hello";
let Greet = () => {
  return /* @__PURE__ */ React.createElement("div", null, "esbuild test ", /* @__PURE__ */ React.createElement(Hello, null));
};
console.log(Server.renderToString(/* @__PURE__ */ React.createElement(Greet, null)));
