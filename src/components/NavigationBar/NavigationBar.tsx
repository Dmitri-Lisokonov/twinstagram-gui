import "./NavigationBar.css";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxOutlined from "@material-ui/icons/AddBoxOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LocalStorageManager } from "../../utility/LocalStorageManager";


const NavigationBar = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const localStorageManager = new LocalStorageManager();

    useEffect(() => {
        let user = localStorageManager.getUser();
        if (!user) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar_logo">

                </Link>
                <div className="navbar_controls">
                    <Link to="/" className="navbar_controls_home-button">
                        <HomeIcon />
                    </Link>
                    <Link to="/create" className="navbar_controls_create-post">
                        <AddBoxOutlined />
                    </Link>

                    <Link to={"/profile/" + currentUser.username}>
                        <img src={currentUser.profilePicture} className="navbar_controls_profile-picture" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default NavigationBar;