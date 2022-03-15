import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="auth">
            {/* <div className="auth_form">
                <div className="auth_form_header">
                    <div className="auth_form_header_logo">

                    </div>
                    <div className="auth_form_header_slogan">
                        Please don't sue me.
                    </div>

                </div>
                <div className="auth_form_controls">
                    <input placeholder="Username" className="auth_form_controls_input username">

                    </input>
                    <input placeholder="Password" className="auth_form_controls_input password">

                    </input>
                    <button className="auth_form_controls_button">
                        Sign in
                    </button>
                </div>
                <div className="auth_form_sign-up">
                    <div className="text-normal">
                        Not registered?
                    </div>
                    <Link to="/register" className="form-link">
                        Sign up here.
                    </Link>
                </div>
            </div> */}
            <AuthenticationForm>
                <div>
                    <div className="auth_form_controls">
                        <input placeholder="Username" className="auth_form_controls_input username">

                        </input>
                        <input placeholder="Password" className="auth_form_controls_input password">

                        </input>
                        <button className="auth_form_controls_button">
                            Sign in
                        </button>
                    </div>
                    <div className="auth_form_sign-up">
                        <div className="text-normal">
                            Not registered?
                        </div>
                        <Link to="/register" className="form-link">
                            Sign up here.
                        </Link>
                    </div>
                </div>
            </AuthenticationForm>
        </div>
    )
}

export default LoginPage;