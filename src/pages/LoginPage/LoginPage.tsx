import { TextField } from "@material-ui/core";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login">
            <div className="login_form">
                <div className="login_form_header">
                    <div className="login_form_header_logo">

                    </div>
                    <div className="login_form_header_slogan">
                        Please don't sue me.
                    </div>

                </div>
                <div className="login_form_controls">
                    <input placeholder="Username" className="login_form_controls_input username">

                    </input>
                    <input placeholder="Password" className="login_form_controls_input password">

                    </input>
                    <button className="login_form_controls_button">
                        Sign in
                    </button>
                </div>
                <div className="login_form_sign-up">
                    <div className="text-normal">
                        Not registered?
                    </div>
                    <div className="text-blue-bold">
                        Sign up here.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;