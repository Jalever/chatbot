import * as React from "react";
import { connect } from "react-redux";
import AppProps from "@type/componentprops/App";
//synthetic events
import updateMessage from "@type/events/updateMessage";
import RootReducerType from "@type/states/rootreducer";
//components
import UserDialogue from "@components/UserDialogue/index";
import UserInput from "@components/UserInput/index";

//mapDispatchToProps
import { SendMessage } from "@store/actions/chat";
import { UpdateSession } from "@store/actions/system";

const {
    useState,
    useEffect
} = React;

const App:React.FunctionComponent<AppProps> = (props: AppProps) => {
    let [message, setMessage] = useState("");

    useEffect(() => {
        props.UpdateSession({
            loggedIn: true,
            username: "Jalever",
            session: "my_session"
        });
    });

    //callback: onChange
    let onUpdateMessage = (event: updateMessage) => {
        setMessage(`${event.currentTarget.value}`);
    };

    let onSendMessage = (message: String) => {
        props.SendMessage({
            username: props.session.username,
            message: message,
            timestamp: new Date().getTime()
        });

        setMessage("");
    };

    return (
        <React.Fragment>
            <div>
                <UserDialogue
                    messages={ props.chat.messages }
                />

                <UserInput 
                    message={message}
                    username={ props.session.username }
                    updatemessage={ onUpdateMessage }
                    sendmessage={ onSendMessage }
                />
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state: RootReducerType) => {
    return {
        session: state.SystemReducer,
        chat: state.ChatReducer
    };
};


export default connect(
    mapStateToProps,
    {
        SendMessage,
        UpdateSession
    }
)(App);