import {
    UPDATE_SESSION
} from "./../../constants/system";

import { SystemState } from "./../states/system";

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION,
    payload: SystemState
};

export type SystemActionTypes = UpdateSessionAction;
