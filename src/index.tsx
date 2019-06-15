import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as styles from "./styles.scss";

import App from "@layout/App";

import Store from "@store/index";

const configureStore = Store();

ReactDOM.render(
    <Provider store={configureStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);