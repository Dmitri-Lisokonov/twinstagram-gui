import { User } from "../models/User";

export interface IUserContext {
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}