import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "./../../constants/chat";

import { Message } from "./../states/chat";

interface SendMessage{
    type: typeof SEND_MESSAGE,
    payload: Message
};

interface DeleteMessage {
    type: typeof DELETE_MESSAGE,
    meta: {
        timestamp: number
    }
};

export type ChatAction = SendMessage | DeleteMessage;
