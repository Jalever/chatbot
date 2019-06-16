export interface Message {
    username: string;
    message: string;
    timestamp: number;
};

export interface ChatState {
    messages: Message[];
};