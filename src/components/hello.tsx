import * as React from "react";
import * as styles from "./styles.scss";

export interface HelloProps{
    compiler: String,
    framework: String
};

export const Hello = (props: HelloProps) => {
    return(
        <h1 className={styles.world}>Hello From {props.compiler} and {props.framework}</h1>
    );
};