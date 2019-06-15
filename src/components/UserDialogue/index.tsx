import * as React from "react";
import { ChatState } from "@type/states/chat";

const UserDialogue: React.FunctionComponent<ChatState> = (props: ChatState) => {
    let { messages } = props;

    return(
        <React.Fragment>
            <div>
                {
                    messages.map(item => {
                        return <div
                            key={ `${item.timestamp}` }
                        >
                            <span>{ item.username }</span>
                            <p>{ item.message }</p>
                        </div>
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default UserDialogue;