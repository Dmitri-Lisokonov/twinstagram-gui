import CreatePost from "../../components/CreatePost/CreatePost";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
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