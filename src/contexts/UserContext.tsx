import { ReactNode, useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUserContext } from "../interfaces/IUserContext";
import { User } from "../models/User";
import { LocalStorageManager } from "../utility/LocalStorageManager";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = (props: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const [viewedUser, setViewedUser] = useState({} as User);
    const [defaultIcon, setDefaultIcon] = useState("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E");
    const localStorageManager = new LocalStorageManager();

    useEffect(() => {
        const user = localStorageManager.getUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const value = {
        currentUser, setCurrentUser,
        viewedUser, setViewedUser,
        defaultIcon, setDefaultIcon
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}