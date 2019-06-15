import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "@constants/chat";

import {
    ChatActionTypes
} from "@type/actions/chat";

import {
    ChatState
} from "@type/states/chat";

const initialState: ChatState = {
    messages: []
};

export default function(state = initialState, action: ChatActionTypes): ChatState {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                messages: [...state.messages, action.payload]
            };
            break;
        }

        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(item => {
                    return item.timestamp !== action.payload.timestamp
                })
            }
            break;
        }
    
        default:
            return state;
    }
}

