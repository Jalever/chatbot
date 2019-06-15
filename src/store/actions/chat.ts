import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "@constants/chat";

import {
    Message
} from "@type/states/chat";

export function SendMessage(newMessage: Message) {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
};

export function DeleteMessage(timestamp : Number) {
    return {
        type: DELETE_MESSAGE,
        payload: {
            timestamp
        }
    }
}