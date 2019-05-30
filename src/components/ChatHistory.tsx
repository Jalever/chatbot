import * as React from "react";
import { Message } from "./../types/states/chat";
import * as styles from "./ChatHistory.scss";

const { useEffect } = React;

interface ChatHistoryProps {
    messages: Message[];
};

const ChatHistory: React.FunctionComponent<ChatHistoryProps> = ({ messages }) => {
    return(
        <div className={styles.ChatHistory}>
            {
                messages.map(item => {
                    return <div
                        className="chat-history"
                        key={item.timestamp}
                    >
                        <h3>From: {item.user}</h3>
                        <p>{ item.message }</p>
                    </div>
                })
            }
        </div>
    );
};

export default ChatHistory;

