import "./SettingsPage.css";
import SettingsIcon from '@material-ui/icons/Settings';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { LocalStorageManager } from "../../utility/LocalStorageManager";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserService } from "../../services/UserService";
import { MessageContext } from "../../contexts/MessageContext";
import { useAlert } from "react-alert";

const SettingsPage = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [nameInput, setNameInput] = useState("");
    const [bioInput, setBioInput] = useState("");
    const { image, setImage } = useContext(MessageContext);
    const userService = new UserService();
    const localStorageManager = new LocalStorageManager();
    const navigate = useNavigate();
    const alert = useAlert();

    const handleChange = (event: any) => {
        if (event.target.name === "nameInput") {
            setNameInput(event.target.value);
        }
        if (event.target.name === "bioInput") {
            setBioInput(event.target.value);
        }
    }

    const logOutButton = () => {
        localStorageManager.deleteAuthToken();
        localStorageManager.deleteUser();
        navigate("/login");
    }

    const saveButton = () => {
        let body = {
            name: nameInput,
            bio: bioInput,
            profilePicture: image
        }

        userService.updateUser(body)
            .then((user) => {
                if (user) {
                    localStorageManager.setUser(user);
                    setCurrentUser(user);
                    alert.success("Profile updated successfully");
                }
            });
    }

    useEffect(() => {
        if (currentUser) {
            let user = localStorageManager.getUser();
            setNameInput(user.name);
            setBioInput(user.bio);
            setImage(user.profilePicture);
        }
    }, [currentUser]);

    return (
        <div className="settings">
            <NavigationBar />
            <div className="settings-container">
                <div className="settings_header">
                    <SettingsIcon />
                    <div className="create-post_header_username">
                        Settings
                    </div>
                </div>
                <div className="settings_body">
                    <div className="settings_container-image">
                        <img className="settings_container-image_image" src={image}></img>
                    </div>
                    <div className="settings_controls">
                        <ImageUpload buttonText="Change profile picture" />
                        <input onChange={handleChange} value={nameInput} placeholder="Change name" className="auth_form_controls_input settings-form" name="nameInput">

                        </input>
                        <textarea onChange={handleChange} value={bioInput} placeholder="Type new bio here..." className="settings_controls_textarea settings-form" name="bioInput">

                        </textarea>
                        <div className="settings_controls_buttons">
                            <button onClick={logOutButton} className="settings_controls_button logout">
                                Log out
                            </button>
                            <button onClick={saveButton} className="settings_controls_button save">
                                Save
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SettingsPage;