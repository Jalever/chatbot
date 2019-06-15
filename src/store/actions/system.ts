import {
    UPDATE_SESSION
} from "@constants/system";

import {
    SystemState
} from "@type/states/system";

export function UpdateSession(newSession: SystemState) {
    return {
        type: UPDATE_SESSION,
        payload: newSession
    }
}