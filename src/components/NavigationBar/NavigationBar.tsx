import './NavigationBar.css';

const NavigationBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar_logo">
                    Twinstagram
                </div>
                <div className="navbar_controls">
                    <div className="navbar_controls_home-button">
                        H
                    </div>
                    <div className="navbar_controls_create-post">
                        C
                    </div>
                    <div className="navbar_controls_profile-picture">
                        P
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavigationBar;