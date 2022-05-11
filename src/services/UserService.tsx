import { ApiMessageHelper } from "../utility/ApiMessageHelper";
import { HttpClient } from "./HttpClient";
import { ApiConfig as config } from "../config/ApiConfig";
import { ResponseMessage } from "../models/ResponseMessage";
import { User } from "../models/User";

export class UserService {
    private helper = new ApiMessageHelper();
    private client = new HttpClient();

    public getUser(username: string) {
        return this.client.Get(`${config.baseUrl}/${config.userService.getUser}${username}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let user = this.helper.handleIncomingMessage<User>(response);
                    if (user) {
                        return user;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public updateUser(body: {}) {
        return this.client.Put(`${config.baseUrl}/${config.userService.updateUser}`, body)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let user = this.helper.handleIncomingMessage<User>(response);
                    if (user) {
                        return user;
                    }
                    else {
                        return false;
                    }
                }
            });
    }
}