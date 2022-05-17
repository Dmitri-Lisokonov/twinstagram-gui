import { useContext, useState } from "react";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationForm from "../../components/AuthenticationForm/AuthenticationForm";
import { UserContext } from "../../contexts/UserContext";
import { AuthenticationService } from "../../services/AuthenticationService";
import { UserService } from "../../services/UserService";
import { LocalStorageManager } from "../../utility/LocalStorageManager";
import "./LoginPage.css";

const LoginPage = () => {
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const { setCurrentUser } = useContext(UserContext);
    const authService = new AuthenticationService();
    const userService = new UserService();
    const localStorageManager = new LocalStorageManager();

    let navigate = useNavigate();
    const alert = useAlert();

    const handleChange = (event: any) => {
        if (event.target.name === "userNameInput") {
            setUserNameInput(event.target.value);
        }
        else if (event.target.name === "passwordInput") {
            setPasswordInput(event.target.value);
        }
    }

    const checkInput = () => {
        if (userNameInput === "" || passwordInput === "") {
            alert.error("Please fill in all fields");
            return false;
        }
        else {
            return true;
        }
    }

    const loginButton = () => {
        if (checkInput()) {
            let body = {
                userName: userNameInput,
                password: passwordInput
            }
            authService.login(body)
                .then((authUser) => {
                    if (authUser) {
                        localStorageManager.setAuthToken(authUser)
                            .then(() => {
                                userService.getUser(authUser.username)
                                    .then((user) => {
                                        if (user) {
                                            setCurrentUser(user);
                                            localStorageManager.setUser(user);
                                            navigate("/");
                                        }
                                    });
                            })
                    }
                });
        }
    }



    return (
        <div className="auth">
            <AuthenticationForm>
                <div>
                    <div className="auth_form_controls">
                        <input onChange={handleChange} name="userNameInput" placeholder="Username" className="auth_form_controls_input username">

                        </input>
                        <input onChange={handleChange} name="passwordInput" placeholder="Password" className="auth_form_controls_input password">

                        </input>
                        <button onClick={loginButton} className="auth_form_controls_button">
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