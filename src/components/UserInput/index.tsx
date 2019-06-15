import * as React from "react";

import { UserInputProps } from "@type/componentprops/UserInput";

const UserInput: React.FunctionComponent<UserInputProps> = (props: UserInputProps) => {
    let {
        username,
        message,
        sendmessage,
        updatemessage
    } = props;

    let handleSendMessage = () => {
        sendmessage(message);
    };

    let handleKeyPress = (e: React.KeyboardEvent<any>) => {
        if(e.key === "key") {
            handleSendMessage();
        }
    };

    return(
        <React.Fragment>
            <div>
                <span>{ username }</span>
                <input 
                    value={`${message}`}
                    onChange={ updatemessage }
                    onKeyPress={ handleKeyPress }
                    placeholder={`Tying something...`}
                />
                <button
                    onClick={handleSendMessage}
                >{ `Send` }</button>
            </div>
        </React.Fragment>
    );
};

export default UserInput;