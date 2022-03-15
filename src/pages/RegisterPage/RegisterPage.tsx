import { Link } from "react-router-dom";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import "./RegisterPage.css";

const RegisterPage = () => {
    return (
        <div className="register">
            <AuthenticationForm>
                <div>
                    <div className="auth_form_controls">
                        <input placeholder="Username" className="auth_form_controls_input username">

                        </input>
                        <input placeholder="Full name" className="auth_form_controls_input name">

                        </input>
                        <input placeholder="Password" className="auth_form_controls_input password">

                        </input>
                        <input placeholder="Confirm password" className="auth_form_controls_input password">

                        </input>
                        <button className="auth_form_controls_button">
                            Sign up
                        </button>
                    </div>
                    <div className="auth_form_sign-up">
                        <div className="text-normal">
                            Already have an account?
                        </div>
                        <Link to="/login" className="form-link">
                            Sign in here.
                        </Link>
                    </div>
                </div>
            </AuthenticationForm>
        </div>
    )
}

export default RegisterPage;