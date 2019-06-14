import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./style.scss";
import Header from "@components/Header/index";

import Footer from "@components/Footer/index";
import Hello from "@components/Hello/index";

const App = () => {
    return(
        <>
            <Header />
                <Hello 
                    compiler="youtube"
                    framework="google"
                />
            <Footer />
        </>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById("root")
);