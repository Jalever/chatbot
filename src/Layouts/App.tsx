import * as React from "react";
import styles from "@/Layouts/App.scss";

export interface helloProps{
    compiler: string,
    framework: string
}

export const Hello = (props: helloProps) => {
    return(
        <h1
            className={styles.dd}
        >Hello from {props.compiler} and {props.framework}</h1>
    );
};