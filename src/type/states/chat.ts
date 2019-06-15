export interface Message {
    username: String,
    message: String,
    timestamp: Number
};

export interface ChatState {
    messages: Message[]
};