import { useContext } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { MessageContext } from "../../contexts/MessageContext";
import "./PreviewPage.css";
import { Link, Navigate } from "react-router-dom";

const PreviewPage = () => {
    const { creatingMessage } = useContext(MessageContext);

    const createMessage = () => {
        console.log("created:", creatingMessage);
    }

    return (
        <div className="post-preview">
            <NavigationBar />
            {
                !creatingMessage.image ? <Navigate replace to="/create" />
                    :
                    <div className="post">
                        <div className="post-preview_header">
                            <div className="post-preview_header_profile">
                                <img className="post_header_profile-picture" src={require("../../resources/img_avatar.png")}></img>
                                <div className="post_header_username">
                                    Preview
                                </div>
                            </div>
                            <div className="post-preview_header_controls">
                                <Link to="/create" className="post-preview_header_controls_button back-button">
                                    <ArrowBackIcon />
                                </Link>
                                <Link onClick={() => createMessage()} to="/" className="post-preview_header_controls_button post-button">
                                    <CheckIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="post_container-image">
                            <img className="post_container-image_image" src={creatingMessage.image}></img>
                        </div>
                        <div>
                            <div className="post_description">
                                {creatingMessage.description}
                            </div>
                            <div className="post_date">
                                {creatingMessage.createdDate.toLocaleString()}
                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}

export default PreviewPage;