import Post from "../../components/Post/Post";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Message } from "../../models/Message";
import "./FeedPage.css";
import { Feed } from "../../components/Feed/Feed";

const FeedPage = () => {

    return (
        <div className="feed">
            <NavigationBar />
            <Feed />
        </div>
    )
}

export default FeedPage;