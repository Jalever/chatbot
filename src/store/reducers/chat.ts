import {
    ChatState
} from "./../../types/states/chat";

import {
    ChatAction
} from "./../../types/actions/chat";

import {
    SEND_MESSAGE,
    DELETE_MESSAGE
} from "./../../constants/chat";

const initialState: ChatState = {
    messages: []
};

function chatReducer(state = initialState, action: ChatAction): ChatState {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                messages: [ ...state.messages, action.payload ]
            };
            break;
        }
        
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(item => {
                    return item.timestamp !== action.meta.timestamp;
                })
            };
            break;
        }
    
        default:
            return state;
    }
};

export default chatReducer;