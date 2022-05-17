import { useContext, useEffect } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { MessageContext } from "../../contexts/MessageContext";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import "./Profile.css"

const Profile = (props: { user: User }) => {
    const { messages } = useContext(MessageContext)
    const { setViewedUser, currentUser } = useContext(UserContext);
    const alert = useAlert();
    const userService = new UserService();

    const followButton = () => {
        userService.FollowUser(props.user.id)
            .then((data) => {
                if (data) {
                    userService.getUser(props.user.username)
                        .then((user) => {
                            if (user) {
                                setViewedUser(user);
                            }
                        });
                }
            });
    }

    return (
        <div className="dashboard">
            <div className="dashboard_profile-picture-container">
                <img className="dashboard_profile-picture-container_image" src={props.user.profilePicture} />
            </div>
            <div className="dashboard_controls">
                <div className="dashboard_controls_username">
                    {props.user.username}
                    {
                        currentUser.id === props.user.id ?
                            <Link to="/settings" className="dashboard_controls_change-profile-button">
                                Change profile
                            </Link>
                            :
                            <button className="follow-button" onClick={followButton}>
                                Follow
                            </button>
                    }
                </div>
                <div className="dashboard_controls_account-metrics">
                    <div className="dashboard_controls_account-metrics_messages">
                        {messages.length} messages
                    </div>
                    <div className="dashboard_controls_account-metrics_followers">
                        {
                            currentUser.id === props.user.id ?
                                <Link to="/followers" className="followers-button">
                                    {props.user.followerCount} Followers
                                </Link>
                                :
                                <>
                                    {props.user.followerCount} Followers
                                </>
                        }

                    </div>
                    <div className="dashboard_controls_account-metrics_following">
                        {
                            currentUser.id === props.user.id ?
                                <Link to="/following" className="followers-button">
                                    {props.user.followingCount} Following
                                </Link>
                                :
                                <>
                                    {props.user.followingCount} Following
                                </>
                        }
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