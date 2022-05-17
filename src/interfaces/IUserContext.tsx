import { User } from "../models/User";

export interface IUserContext {
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
    viewedUser: User;
    setViewedUser: React.Dispatch<React.SetStateAction<User>>;
    defaultIcon: string;
    setDefaultIcon: React.Dispatch<React.SetStateAction<string>>;
}