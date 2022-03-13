import './NavigationBar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar_logo">
                </div>
                <div className="navbar_controls">

                    <Link to="/" className="navbar_controls_home-button">
                        <HomeIcon />
                    </Link>
                    <Link to="create" className="navbar_controls_create-post">
                        <AddBoxOutlined />
                    </Link>
                    <Link to="/dashboard" className="navbar_controls_profile-picture">

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;