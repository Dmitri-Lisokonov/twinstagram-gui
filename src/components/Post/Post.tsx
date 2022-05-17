import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import "./Post.css";

const Post = (props: { message: Message, loadUser: boolean }) => {
    const userService = new UserService();
    const { defaultIcon } = useContext(UserContext);
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        if (props.loadUser) {
            userService.getUserById(props.message.userId)
                .then((user) => {
                    if (user) {
                        setUser(user);
                    }
                });
        }
    }, [props.message])

    return (

        <div className="post">
            {
                props.loadUser ? <div className="post_header">
                    <img className="post_header_profile-picture" src={user.profilePicture ? user.profilePicture : defaultIcon}></img>
                    <div className="post_header_username">
                        {user.username}
                    </div>
                </div>
                    : null
            }
            <div className="post_container-image">
                <img className="post_container-image_image" src={props.message.image}></img>
            </div>
            <div>
                <div className="post_description">
                    {props.message.description}
                </div>
                <div className="post_date">
                    {props.message.createdDate.toLocaleString()}
                </div>
            </div>
        </div >
    )
}

export default Post;