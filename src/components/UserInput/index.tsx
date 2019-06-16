import * as React from "react";
import * as styles from "./styles.scss";

import { UserInputProps } from "@type/componentprops/UserInput";

const UserInput: React.FunctionComponent<UserInputProps> = (props: UserInputProps) => {
    let {
        username,
        message,
        sendmessage,
        updatemessage
    } = props;

    let handleKeyPress = (e: React.KeyboardEvent<any>) => {
        if(e.key === "Enter") {
            sendmessage(message);
        }
    };

    return(
        <React.Fragment>
            <div
                className={styles.userinput}
            >
                <input
                    className={styles.inputBoard}
                    value={`${message}`}
                    onChange={ updatemessage }
                    onKeyPress={ handleKeyPress }
                    placeholder={`Tying something...`}
                />
                {/* <button
                    onClick={handleSendMessage}
                >{ `Send` }</button> */}
            </div>
        </React.Fragment>
    );
};

export default UserInput;