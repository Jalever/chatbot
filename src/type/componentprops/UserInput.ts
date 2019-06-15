import updateMessage from "@type/events/updateMessage";

export interface UserInputProps {
    username: String;
    message: String;
    sendmessage: (message: String) => void;
    updatemessage: (event: updateMessage) => void;
};