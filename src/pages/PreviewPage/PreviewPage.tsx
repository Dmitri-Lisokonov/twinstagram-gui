import { useContext } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { MessageContext } from "../../contexts/MessageContext";
import "./PreviewPage.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { MessageService } from "../../services/MessageService";

const PreviewPage = () => {
    const { creatingMessage } = useContext(MessageContext);
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const messageService = new MessageService();

    const createMessage = () => {
        if (creatingMessage && currentUser) {
            messageService.CreateMessage(creatingMessage)
                .then((result) => {
                    if (result) {
                        navigate("/profile/" + currentUser.username);
                    }
                });
        }
    }

    return (
        <div className="post-preview">
            <NavigationBar />
            <div className="post">
                <div className="post-preview_header">
                    <div className="post-preview_header_profile">
                        <img className="post_header_profile-picture" src={currentUser.profilePicture}></img>
                        <div className="post_header_username">
                            Preview
                        </div>
                    </div>
                    <div className="post-preview_header_controls">
                        <Link to="/create" className="post-preview_header_controls_button back-button">
                            <ArrowBackIcon />
                        </Link>
                        <button onClick={createMessage} className="post-preview_header_controls_button post-button">
                            <CheckIcon />
                        </button>
                    </div>
                </div>
                <div className="post_container-image">
                    <img className="post_container-image_image" src={creatingMessage.image}></img>
                </div>
                <div>
                    <div className="post_description">
                        {
                            creatingMessage.description ?
                                <>
                                    {creatingMessage.description}
                                </>
                                :
                                <></>
                        }
                    </div>
                    <div className="post_date">
                        {new Date().toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewPage;