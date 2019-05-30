import {
    Message
} from "./../../types/states/chat";

import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "./../../constants/chat";

export function sendMessage(newMessage: Message) {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    };
}

export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    };
}

