import {
    SystemActionTypes
} from "./../../types/actions/system";

import {
    SystemState
} from "./../../types/states/system";

import { UPDATE_SESSION } from "./../../constants/system";


const initialState : SystemState = {
    loggedIn: false,
    session: "",
    userName: ""
};

function systemReducer(state = initialState, action: SystemActionTypes) : SystemState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            }
        }
    
        default:
            return state;
    }
}

export default systemReducer;



