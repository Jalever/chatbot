import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "@constants/chat";

import {
    Message
} from "@type/states/chat";

interface SendMessage {
    type: typeof SEND_MESSAGE,
    payload: Message
};

interface DeleteMessage {
    type: typeof DELETE_MESSAGE,
    payload: {
        timestamp: Number
    }
};

export type ChatActionTypes = SendMessage | DeleteMessage;

