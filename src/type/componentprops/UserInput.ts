import updateMessage from "@type/events/updateMessage";

export interface UserInputProps {
    username: string;
    message: string;
    sendmessage: (message: string) => void;
    updatemessage: (event: updateMessage) => void;
};