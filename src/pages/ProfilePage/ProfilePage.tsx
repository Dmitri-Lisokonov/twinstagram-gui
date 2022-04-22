import Profile from "../../components/Profile/Profile";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./ProfilePage.css";
import { Feed } from "../../components/Feed/Feed";

const ProfilePage = () => {


    return (
        <div className="dashboardpage">
            <NavigationBar />
            <div className="dashboard-content">
                <Profile />
                <Feed />
            </div>
        </div>
    )
}

export default ProfilePage;