import * as React from "react";
import { ChatState } from "@type/states/chat";
import * as styles from "./styles.scss";

const UserDialogue: React.FunctionComponent<ChatState> = (props: ChatState) => {
    let { messages } = props;

    return(
        <React.Fragment>
            <div
                className={styles.userDialogue}
            >
                {
                    messages.map(item => {
                        return <div
                            className={styles.messageItem}
                            key={ `${item.timestamp}` }
                        >
                            <p className={styles.username}>{ item.username }</p>
                            <p
                                className={styles.message}>
                                { item.message }
                            </p>
                        </div>
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default UserDialogue;