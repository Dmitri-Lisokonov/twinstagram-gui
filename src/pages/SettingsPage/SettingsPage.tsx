import "./SettingsPage.css";
import SettingsIcon from '@material-ui/icons/Settings';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ImageUpload from "../../components/ImageUpload/ImageUpload";

const SettingsPage = () => {
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
                        <img className="settings_container-image_image" src={require("../../resources/profile-pic.jpg")}></img>
                    </div>
                    <div className="settings_controls">
                        <ImageUpload buttonText="Change profile picture" />
                        <input placeholder="Change name" className="auth_form_controls_input settings-form">

                        </input>
                        <textarea placeholder="Type new bio here..." className="settings_controls_textarea settings-form">

                        </textarea>
                        <div className="settings_controls_buttons">
                            <button className="settings_controls_button logout">
                                Log out
                            </button>
                            <button className="settings_controls_button save">
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