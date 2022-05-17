import { User } from "../models/User";

export class LocalStorageManager {
    public getUser() {
        let user = localStorage.getItem("User");
        if (user) {
            return JSON.parse(user);
        }
    }

    public setUser(user: User) {
        localStorage.setItem("User", JSON.stringify(user));
    }

    public deleteUser() {
        localStorage.removeItem("User");
    }

    public getAuthToken() {
        let token = localStorage.getItem("AuthToken");
        if (token) {
            return token;
        }
    }

    public async setAuthToken(user: User) {
        localStorage.setItem("AuthToken", user.token);
    }

    public deleteAuthToken() {
        localStorage.removeItem("AuthToken");
    }
}