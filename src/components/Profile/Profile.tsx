import { Link } from "react-router-dom";
import "./Profile.css"

const Profile = () => {
    return (
        <div className="dashboard">
            <div className="dashboard_profile-picture-container">
                <img className="dashboard_profile-picture-container_image" src={require("../../resources/profile-pic.jpg")} />
            </div>
            <div className="dashboard_controls">
                <div className="dashboard_controls_username">
                    some_user
                    <Link to="/settings" className="dashboard_controls_change-profile-button">
                        Change profile
                    </Link>
                </div>
                <div className="dashboard_controls_account-metrics">
                    <div className="dashboard_controls_account-metrics_messages">
                        100 messages
                    </div>
                    <div className="dashboard_controls_account-metrics_followers">
                        200 followers
                    </div>
                    <div className="dashboard_controls_account-metrics_following">
                        200 following
                    </div>
                </div>
                <div className="dashboard_controls_name">
                    Jan verkouden
                </div>
                <div className="dashboard_controls_bio">
                    Welkom op mijn instagram!
                </div>
            </div>
        </div >
    )
}

export default Profile;