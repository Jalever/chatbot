import { combineReducers } from "redux";
import Chat from "./chat";
import System from "./system";

const rootReducer = combineReducers({
    ChatReducer: Chat,
    SystemReducer: System
});

export default rootReducer;