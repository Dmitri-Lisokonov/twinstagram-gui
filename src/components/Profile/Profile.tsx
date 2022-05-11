import { useContext } from "react";
import { Link } from "react-router-dom";
import { MessageContext } from "../../contexts/MessageContext";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../models/User";
import "./Profile.css"

const Profile = (props: { user: User }) => {
    const { messages } = useContext(MessageContext)
    const { currentUser } = useContext(UserContext);

    return (
        <div className="dashboard">
            <div className="dashboard_profile-picture-container">
                <img className="dashboard_profile-picture-container_image" src={currentUser.profilePicture} />
            </div>
            <div className="dashboard_controls">
                <div className="dashboard_controls_username">
                    {props.user.username}
                    <Link to="/settings" className="dashboard_controls_change-profile-button">
                        Change profile
                    </Link>
                </div>
                <div className="dashboard_controls_account-metrics">
                    <div className="dashboard_controls_account-metrics_messages">
                        {messages.length} messages
                    </div>
                    <div className="dashboard_controls_account-metrics_followers">
                        {props.user.followerCount} Followers
                    </div>
                    <div className="dashboard_controls_account-metrics_following">
                        {props.user.followingCount} Following
                    </div>
                </div>
                <div className="dashboard_controls_name">
                    {props.user.name}
                </div>
                <div className="dashboard_controls_bio">
                    {props.user.bio}
                </div>
            </div>
        </div >
    )
}

export default Profile;