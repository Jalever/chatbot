"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var hello_1 = require("./components/hello");
var styles = __importStar(require("./style.scss"));
var index_1 = __importDefault(require("@/components/Header/index"));
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(index_1.default, null),
        React.createElement(hello_1.Hello, { compiler: "V8", framework: "Jalever" }),
        React.createElement("h1", { className: styles.hello }, "Hello World!")));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map