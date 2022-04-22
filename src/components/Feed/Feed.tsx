import { useContext } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import Post from "../Post/Post";

export const Feed = () => {
    const { messages } = useContext(MessageContext);

    return (
        <>
            {messages.map((message) => {
                return (
                    <Post message={message} />
                )
            })
            }
        </>
    )
}
