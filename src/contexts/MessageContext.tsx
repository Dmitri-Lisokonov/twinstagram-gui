import { ReactNode, useState, createContext, useEffect } from "react";
import { IMessageContext } from "../interfaces/IMessageContext";
import { Message } from "../models/Message";
import { MessageService } from "../services/MessageService";

export const MessageContext = createContext({} as IMessageContext);

export const MessageProvider = (props: { children: ReactNode }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [image, setImage] = useState("");
    const [creatingMessage, setCreatingMessage] = useState({} as Message)

    const value = {
        image, setImage,
        creatingMessage, setCreatingMessage,
        messages, setMessages
    }

    return (
        <MessageContext.Provider value={value}>
            {props.children}
        </MessageContext.Provider>
    )
}