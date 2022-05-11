import Profile from "../../components/Profile/Profile";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./ProfilePage.css";
import { Feed } from "../../components/Feed/Feed";
import { useContext, useEffect } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import { MessageService } from "../../services/MessageService";
import { useParams } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { UserContext } from "../../contexts/UserContext";

const ProfilePage = () => {
    const { messages, setMessages } = useContext(MessageContext)
    const { viewedUser, setViewedUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext);
    let { username } = useParams();
    const messageService = new MessageService();
    const userService = new UserService();
    console.log(messages);
    useEffect(() => {
        if (username) {
            if (currentUser.username === username) {
                setViewedUser(currentUser);
                messageService.getMessagesForUser(currentUser.id)
                    .then((messages) => {
                        if (messages) {
                            setMessages(messages);
                        }
                    });
            }
            else {
                userService.getUser(username)
                    .then((user) => {
                        if (user) {
                            setViewedUser(user);
                            messageService.getMessagesForUser(user.id)
                                .then((messages) => {
                                    if (messages) {
                                        setMessages(messages);
                                    }
                                });
                        }
                    });
            }
        }
    }, [username]);

    return (
        <div className="dashboardpage">
            <NavigationBar />
            <div className="dashboard-content">
                <Profile user={viewedUser} />
                <Feed messages={messages} />
            </div>
        </div>
    )
}

export default ProfilePage;