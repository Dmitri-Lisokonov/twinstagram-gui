
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import "./UserCommunityPage.css";

export const UserCommunityPage = (props: { getFollowing: boolean }) => {
    const { currentUser, defaultIcon } = useContext(UserContext);
    const [community, setCommunity] = useState<User[]>([]);
    const userService = new UserService();
    const alert = useAlert();

    const unfollowButton = (user: User) => {
        userService.FollowUser(user.id)
            .then(() => {
                window.location.reload();
            })
    }

    useEffect(() => {
        if (currentUser) {
            if (props.getFollowing) {
                userService.GetFollowing(currentUser.id).then(users => {
                    if (users) {
                        setCommunity(users);
                        if (users.length === 0) {
                            alert.show("You are not following anyone.");
                        }
                    }
                });
            }
            else {
                userService.GetFollowers(currentUser.id).then(users => {
                    if (users) {
                        setCommunity(users);
                        if (users.length === 0) {
                            alert.show("You have no followers.");
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div className="user-community-page">
            <NavigationBar />
            <div className="user-community-content">
                <div className="user-community_user-list">
                    {
                        community.map((user, key) => {
                            return (
                                <div className="user-community_user-list_user" key={key}>
                                    <div className="user-community_user-list_user_profile-picture">
                                        <img className="user-community_user-list_user_profile-picture_image" src={user.profilePicture ? user.profilePicture : defaultIcon} />
                                    </div>
                                    <div className="user-community_user-list_user_username">
                                        {user.username}
                                    </div>
                                    <div className="user-community_user-list_user_unfollow">
                                        <button onClick={() => unfollowButton(user)} className="unfollow-button">
                                            Unfollow
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}