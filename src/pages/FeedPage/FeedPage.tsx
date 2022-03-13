
import Post from "../../components/Message/Post";
import { Message } from "../../models/Message";
import "./FeedPage.css";

const FeedPage = (props: { messages: Message[] }) => {

    return (
        <div className="feed">
            {props.messages.map((message) => {
                return (
                    <Post message={message} />
                )
            })}

        </div>
    )
}

export default FeedPage;