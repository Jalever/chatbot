import {
    SystemState
} from "@type/states/system";

import {
    SystemActionTypes
} from "@type/actions/system";

import {
    UPDATE_SESSION
} from "@constants/system";

const initialState: SystemState = {
    loggedIn: false,
    session: "",
    username: ""
};

export default function(state = initialState, action: SystemActionTypes): SystemState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            };
            break;
        }
    
        default:
            return state;
    }
}


