import {
    UPDATE_SESSION
} from "@constants/system";

import {
    SystemState
} from "@type/states/system";

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION,
    payload: SystemState
};

export type SystemActionTypes = UpdateSessionAction;
