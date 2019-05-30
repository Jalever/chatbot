import * as React from "react";
import { connect } from "react-redux";
import RootReducerState from "./../types/states/rootReducer";

import { SystemState } from "./../types/states/system";
import { ChatState } from "./../types/states/chat";

import { sendMessage } from "./../store/actions/chat";
import { updateSession } from "./../store/actions/system";

import ChatHistory from "./../components/ChatHistory";
import ChatInterface from "./../components/ChatInerface";

import { thunkSendMessage } from "./../effects/thunkSendMessage";
import updateMessageParam from "./../types/syntheticEvent/updateMessageParam";
import * as styles from "@/Layouts/App.scss";

const { useState,useEffect } = React;

interface AppProps {
    sendMessage: typeof sendMessage;
    updateSession: typeof updateSession;
    chat: ChatState;
    system: SystemState;
    thunkSendMessage: any;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        props.updateSession({
            loggedIn: true,
            session: "my_session",
            userName: "Jalever"
        });

        props.sendMessage({
            user: "Chat Bot",
            message:
                "This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.",
            timestamp: new Date().getTime()
        });

        props.thunkSendMessage("This message was sent by a thunk!");
    }, []);

    let updateMessage = (event: updateMessageParam) => {
        setMessage(event.currentTarget.value);
    };

    let sendMessage = (message: string) => {
        props.sendMessage({
            user: props.system.userName,
            message: message,
            timestamp: new Date().getTime()
        });

        setMessage("");
    };

    return(
        <React.Fragment>
            <div
                className={styles.chatbot}
            >
                <ChatHistory
                    messages={props.chat.messages}
                />

                <ChatInterface
                    message={message}
                    userName={props.system.userName}
                    sendMessage={sendMessage}
                    updateMessage={ updateMessage }
                />
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state: RootReducerState) => {
    return {
        system: state.system,
        chat: state.chat
    };
};

export default connect(
    mapStateToProps,
    {
        sendMessage,
        updateSession,
        thunkSendMessage
    }
)(App);