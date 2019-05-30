import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { sendMessage } from "./../store/actions/chat";
import RootReducerState from "./../types/states/rootReducer";
import exampleAPI from "./exampleAPI";

export const thunkSendMessage = (
    message: string
): ThunkAction<void, RootReducerState, null, Action<string>> => 
async dispatch => 
{
    const asyncResp = await exampleAPI();

    dispatch(
        sendMessage({
            message,
            user: asyncResp,
            timestamp: new Date().getTime()
        })
    );
};


