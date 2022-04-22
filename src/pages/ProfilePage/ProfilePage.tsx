import Profile from "../../components/Profile/Profile";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./ProfilePage.css";
import { Feed } from "../../components/Feed/Feed";
import { useContext, useEffect } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import { MessageService } from "../../services/MessageService";

const ProfilePage = () => {
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
        <div className="dashboardpage">
            <NavigationBar />
            <div className="dashboard-content">
                <Profile />
                <Feed messages={messages} />
            </div>
        </div>
    )
}

export default ProfilePage;