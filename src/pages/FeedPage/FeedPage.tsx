
import { Link } from "react-router-dom";
import Post from "../../components/Message/Post";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Message } from "../../models/Message";
import "./FeedPage.css";

const FeedPage = (props: { messages: Message[] }) => {

    return (
        <div className="feed">
            <NavigationBar />
            {props.messages.map((message) => {
                return (
                    <Post message={message} />
                )
            })}
        </div>
    )
}

export default FeedPage;