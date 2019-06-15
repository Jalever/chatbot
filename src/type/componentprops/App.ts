import {
    SendMessage
} from "@store/actions/chat";

import {
    UpdateSession
} from "@store/actions/system";

import {
    ChatState
} from "@type/states/chat";

import {
    SystemState
} from "@type/states/system";

interface AppProps {
    SendMessage: typeof SendMessage;
    UpdateSession: typeof UpdateSession;
    chat: ChatState;
    session: SystemState;
};

export default AppProps;