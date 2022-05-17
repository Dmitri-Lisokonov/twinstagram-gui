import { ApiConfig as config } from "../config/ApiConfig";
import { ResponseMessage } from "../models/ResponseMessage";
import { User } from "../models/User";
import { ApiMessageHelper } from "../utility/ApiMessageHelper";
import { LocalStorageManager } from "../utility/LocalStorageManager";
import { HttpClient } from "./HttpClient";

export class AuthenticationService {
    private client = new HttpClient();
    private manager = new LocalStorageManager();
    private helper = new ApiMessageHelper();

    public register(body: {}) {
        return this.client.Post(`${config.baseUrl}/${config.authService.register}`, body)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let result = this.helper.handleIncomingMessage<string>(response);

                    if (result) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public async login(body: {}) {
        return this.client.Post(`${config.baseUrl}/${config.authService.login}`, body)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let user = this.helper.handleIncomingMessage<User>(response);
                    if (user) {
                        this.manager.setAuthToken(user);
                        return user;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public logOut() {
        this.client.Get(`${config.baseUrl}/${config.authService.logOut}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    this.helper.handleIncomingMessage<string>(response);
                }
            });
    }
}