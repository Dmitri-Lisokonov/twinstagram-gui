import AddBoxOutlined from "@material-ui/icons/AddBoxOutlined";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageContext } from "../../contexts/MessageContext";
import { Message } from "../../models/Message";
import ImageUpload from "../ImageUpload/ImageUpload";
import "./CreatePost.css";

const CreatePost = () => {
    const { image, setCreatingMessage } = useContext(MessageContext);
    const [description, setDescription] = useState("");
    const [charactersLeft, setCharactersLeft] = useState(200);

    const changeDescription = (event: any) => {
        setDescription(event.target.value)
    }

    const showPreview = () => {
        let message = new Message(0, 0, "some_user", description, image, new Date());
        setCreatingMessage(message);
    }

    useEffect(() => {
        setCharactersLeft(200 - description.length)
    }, [description])

    return (
        <div className="post">
            <div className="post_header">
                <AddBoxOutlined />
                <div className="create-post_header_username">
                    Create message
                </div>
            </div>
            <div className="post_container-image no-image-height">
                {
                    image.length > 0 ?
                        <img className="post_container-image_image" src={image}></img>
                        :
                        <img className="post_container-image_image" src={require("../../resources/no-image.png")}></img>
                }
            </div>
            <div>
                <div className="create-post_description">
                    <textarea onChange={(event) => changeDescription(event)} placeholder="Add image description" className="post_description_input">
                    </textarea>
                    <div className="create-post_description_characters-left">
                        Characters left {charactersLeft}...
                    </div>
                </div>
                <div className="create-post_controls">
                    <ImageUpload buttonText="Browse files..." />
                    {
                        image.length > 0 ?
                            <button onClick={showPreview} className="auth_form_controls_button" style={{}}>
                                <Link to="/preview" className="browse-files-button">
                                    <div className="browse-files-button_text">
                                        Show preview
                                    </div>
                                    <ArrowRightAltIcon />
                                </Link>
                            </button>
                            :
                            <button disabled className="auth_form_controls_button">
                                <div className="browse-files-button">
                                    <div className="browse-files-button_text">
                                        Upload image first...
                                    </div>
                                </div>
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePost;