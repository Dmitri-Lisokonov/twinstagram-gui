import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./FeedPage.css";
import { Feed } from "../../components/Feed/Feed";
import { useContext, useEffect } from "react";
import { MessageService } from "../../services/MessageService";
import { MessageContext } from "../../contexts/MessageContext";

const FeedPage = () => {
    const { messages, setMessages } = useContext(MessageContext)
    const messageService = new MessageService();

    useEffect(() => {
        messageService.getMessagesForUser(1).then((messages: any) => {
            if (messages) {
                setMessages(messages);
            }
        });
    }, []);

    return (
        <div className="feed">
            <NavigationBar />
            <Feed messages={messages} />
        </div>
    )
}

export default FeedPage;