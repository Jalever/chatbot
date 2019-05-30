import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Layouts/App";
var App = function () {
    return (React.createElement(Hello, { compiler: "Youtube", framework: "Google" }));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map