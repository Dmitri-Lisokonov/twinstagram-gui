import { useContext, useState } from "react";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import { UserContext } from "../../contexts/UserContext";
import { AuthenticationService } from "../../services/AuthenticationService";
import { LocalStorageManager } from "../../utility/LocalStorageManager";
import "./RegisterPage.css";

const RegisterPage = () => {
    const [userNameInput, setUserNameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const authService = new AuthenticationService();
    let navigate = useNavigate();
    const alert = useAlert();

    const handleChange = (event: any) => {
        if (event.target.name === "userNameInput") {
            setUserNameInput(event.target.value);
        }
        else if (event.target.name === "nameInput") {
            setNameInput(event.target.value);
        }
        else if (event.target.name === "passwordInput") {
            setPasswordInput(event.target.value);
        }
        else if (event.target.name === "confirmPasswordInput") {
            setConfirmPasswordInput(event.target.value);
        }
        else if (event.target.name === "emailInput") {
            setEmailInput(event.target.value);
        }
    }

    const checkPassword = () => {
        if (passwordInput === confirmPasswordInput) {
            return true;
        }
        else {
            alert.error("Passwords do not match");
            return false;
        }
    }

    const registerButton = () => {

        if (checkPassword()) {
            let body = {
                userName: userNameInput,
                password: passwordInput,
                name: nameInput,
                email: emailInput
            }
            authService.register(body)
                .then((success) => {
                    if (success) {
                        navigate("/login");
                    }
                });
        }
    }

    return (
        <div className="register">
            <AuthenticationForm>
                <div>
                    <div className="auth_form_controls">
                        <input onChange={handleChange} name="userNameInput" placeholder="Username" className="auth_form_controls_input username">

                        </input>
                        <input onChange={handleChange} placeholder="Full name" name="nameInput" className="auth_form_controls_input name">

                        </input>
                        <input onChange={handleChange} type="password" placeholder="Password" name="passwordInput" className="auth_form_controls_input password">

                        </input>
                        <input onChange={handleChange} type="password" placeholder="Confirm password" name="confirmPasswordInput" className="auth_form_controls_input password">

                        </input>
                        <input onChange={handleChange} placeholder="Email Address" name="emailInput" className="auth_form_controls_input email">

                        </input>
                        <button onClick={registerButton} className="auth_form_controls_button">
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