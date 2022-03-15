import { ReactNode, useState, createContext } from "react";
import { IMessageContext } from "../interfaces/IMessageContext";
import { Message } from "../models/Message";

export const MessageContext = createContext({} as IMessageContext);

export const MessageProvider = (props: { children: ReactNode }) => {
    const [image, setImage] = useState("");
    const [creatingMessage, setCreatingMessage] = useState({} as Message)

    const value = {
        image, setImage,
        creatingMessage, setCreatingMessage
    }

    return (
        <MessageContext.Provider value={value}>
            {props.children}
        </MessageContext.Provider>
    )
}