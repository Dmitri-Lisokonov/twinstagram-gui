import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

  return (
    <div className="app">
      <Provider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="profile/:username" element={<ProfilePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="preview" element={<PreviewPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
