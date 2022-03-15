import { ReactNode, useState, createContext } from "react";
import { IUserContext } from "../interfaces/IUserContext";
import { User } from "../models/User";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = (props: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState({} as User);

    const value = {
        currentUser, setCurrentUser
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}