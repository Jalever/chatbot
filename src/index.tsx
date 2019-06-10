import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";
import * as styles from "./style.scss";
import Header from "@/components/Header/index";

const App = () => {
    return(
        <>
            <Header />
            <Hello 
                compiler="youtube"
                framework="Jalever"
            />
            <h1 className={styles.hello}>Hello World!</h1>
        </>
    );
};


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);