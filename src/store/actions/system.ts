import {
    UPDATE_SESSION
} from "./../../constants/system";

import {
    SystemState
} from "./../../types/states/system";

export function updateSession(newSeesion: SystemState) {
    return {
        type: UPDATE_SESSION,
        payload: newSeesion
    }
};