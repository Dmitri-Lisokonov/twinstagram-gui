import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./FeedPage.css";
import { Feed } from "../../components/Feed/Feed";
import { useContext, useEffect, useState } from "react";
import { MessageService } from "../../services/MessageService";
import { MessageContext } from "../../contexts/MessageContext";
import { UserContext } from "../../contexts/UserContext";

const FeedPage = () => {
    const [currentUserId, setCurrentUserId] = useState("");
    const { messages, setMessages } = useContext(MessageContext);
    const { currentUser } = useContext(UserContext);
    const messageService = new MessageService();

    useEffect(() => {
        if (currentUser) {
            setCurrentUserId(currentUser.id);
        }
    }, [currentUser]);

    useEffect(() => {
        if (currentUserId) {
            messageService.getMessagesForUser(currentUserId).then((messages: any) => {
                if (messages) {
                    setMessages(messages);
                }
            });
        }
    }, [currentUserId]);

    return (
        <div className="feed">
            <NavigationBar />
            <Feed messages={messages} />
        </div>
    )
}

export default FeedPage;