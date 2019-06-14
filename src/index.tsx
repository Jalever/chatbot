import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./style.scss";
import Header from "@components/Header/index";

import Footer from "@components/Footer/index";


const App = () => {
    return(
        <>
            <Header />

            <Footer />
        </>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById("root")
);