import "./AuthenticationForm.css";
import { ReactElement } from "react";
import { JsxElement } from "typescript";

const AuthenticationForm = (props: { children: ReactElement }) => {
    return (
        <div className="auth_form">
            <div className="auth_form_header">
                <div className="auth_form_header_logo">

                </div>
                <div className="auth_form_header_slogan">
                    Please don't sue me.
                </div>
                {props.children}
            </div>

        </div>
    )
}

export default AuthenticationForm;
