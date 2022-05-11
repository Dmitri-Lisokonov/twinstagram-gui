import { ReactNode, useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUserContext } from "../interfaces/IUserContext";
import { User } from "../models/User";
import { LocalStorageManager } from "../utility/LocalStorageManager";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = (props: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const [viewedUser, setViewedUser] = useState({} as User);
    const localStorageManager = new LocalStorageManager();

    useEffect(() => {
        const user = localStorageManager.getUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const value = {
        currentUser, setCurrentUser,
        viewedUser, setViewedUser
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}