import { JsxElement } from "typescript";
import { Message } from "../../models/Message";
import "./Post.css";

const Post = (props: { message: Message }) => {
    return (
        <div className="message">
            <div className="message_header">
                <div className="message_header_profile-picture">

                </div>
                <div className="message_header_username">
                    {props.message.username}
                </div>
            </div>
            <div className="message_container-image">
                <img className="message_container-image_image" src={props.message.image}></img>
            </div>
            <div>
                <div className="message_description">
                    {props.message.description}
                </div>
                <div className="message_date">
                    {props.message.createdDate.toLocaleString()}
                </div>
            </div>

        </div>
    )
}

export default Post;