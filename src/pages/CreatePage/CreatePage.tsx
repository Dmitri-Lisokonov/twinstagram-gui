import { useContext, useEffect } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { MessageContext } from "../../contexts/MessageContext";
import "./CreatePage.css";

const CreatePage = () => {

    return (
        <div className="create-post">
            <NavigationBar />
            <CreatePost />
        </div>
    )
}

export default CreatePage;