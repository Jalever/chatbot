import * as React from "react";
import updateMessageParam from "./../types/syntheticEvent/updateMessageParam";

interface ChatInterfaceProps {
    message: string;
    userName: string;
    sendMessage: (message: string) => void;
    updateMessage: (event: updateMessageParam) => void;
};

const ChatInterface: React.FunctionComponent<ChatInterfaceProps> = ({
    message,
    userName,
    sendMessage,
    updateMessage
}) => {
    let send = () => {
        sendMessage(message);
    };

    let keyPress = (e: React.KeyboardEvent<any>) => {
        if(e.key === "Enter") {
            send();
        }
    };

    return(
        <div
            className="chat-interface"
        >
            <h3>User: {userName}</h3>
            <input 
                value={message}
                onChange={updateMessage}
                onKeyPress={keyPress}
                className="chat-input"
                placeholder="Type a message..."
            />

            <button
                onClick={send}
            >
                Send
            </button>
        </div>
    );
};


export default ChatInterface;

