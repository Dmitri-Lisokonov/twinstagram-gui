import { Message } from "../../models/Message";
import Post from "../Post/Post";

export const Feed = (props: { messages: Message[], loadUser: boolean }) => {


    return (
        <>
            {props.messages.map((message, key) => {
                return (
                    <Post
                        key={key}
                        message={message}
                        loadUser={props.loadUser}
                    />
                )
            })
            }
        </>
    )
}
