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

    public getUserById(userId: string) {
        return this.client.Get(`${config.baseUrl}/${config.userService.getUserById}${userId}`)
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

    public GetFollowing(userId: string) {
        return this.client.Get(`${config.baseUrl}/${config.userService.getUserFollowing}${userId}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let users = this.helper.handleIncomingMessage<User[]>(response);
                    if (users) {
                        return users;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public GetFollowers(userId: string) {
        return this.client.Get(`${config.baseUrl}/${config.userService.getUserFollowers}${userId}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let users = this.helper.handleIncomingMessage<User[]>(response);
                    if (users) {
                        return users;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public FollowUser(userId: string) {
        return this.client.Get(`${config.baseUrl}/${config.userService.followUser}${userId}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let user = this.helper.handleIncomingMessage<string>(response);
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