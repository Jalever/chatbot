import * as React from "react";
import styles from "@/Layouts/App.scss";
export var Hello = function (props) {
    return (React.createElement("h1", { className: styles.dd },
        "Hello from ",
        props.compiler,
        " and ",
        props.framework));
};
//# sourceMappingURL=App.js.map