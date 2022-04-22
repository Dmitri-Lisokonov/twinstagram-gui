import { Message } from "../models/Message";

export interface IMessageContext {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
    creatingMessage: Message;
    setCreatingMessage: React.Dispatch<React.SetStateAction<Message>>;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}