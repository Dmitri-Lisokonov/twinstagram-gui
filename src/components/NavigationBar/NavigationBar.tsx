import './NavigationBar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';

const NavigationBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar_logo">
                </div>
                <div className="navbar_controls">
                    <div className="navbar_controls_home-button">
                        <HomeIcon />
                    </div>
                    <div className="navbar_controls_create-post">
                        <AddBoxOutlined />
                    </div>
                    <div className="navbar_controls_profile-picture">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;