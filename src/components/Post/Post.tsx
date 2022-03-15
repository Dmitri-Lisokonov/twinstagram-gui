import { JsxElement } from "typescript";
import { Message } from "../../models/Message";
import "./Post.css";

const Post = (props: { message: Message }) => {
    return (
        <div className="post">
            <div className="post_header">
                <img className="post_header_profile-picture" src={require("../../resources/img_avatar.png")}></img>
                <div className="post_header_username">
                    {props.message.username}
                </div>
            </div>
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
        </div>
    )
}

export default Post;