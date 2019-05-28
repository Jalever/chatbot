import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Layouts/App";

const App = () => {
    return(
        <Hello
            compiler="Youtube"
            framework="Google"
        />
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);